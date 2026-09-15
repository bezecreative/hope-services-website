// Subsets the self-hosted fonts to the Latin range actually used on the site.
// Source files live in src/fonts/src (originals); output goes to src/fonts.
import subsetFont from "subset-font";
import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync, readdirSync } from "node:fs";

const SRC = "src/fonts/src";
const OUT = "src/fonts";
mkdirSync(SRC, { recursive: true });

// First run: move originals into src/fonts/src so we never subset a subset.
for (const f of readdirSync(OUT)) {
  if (f.endsWith(".woff2") && !existsSync(`${SRC}/${f}`)) copyFileSync(`${OUT}/${f}`, `${SRC}/${f}`);
}

let text = "";
for (let c = 0x20; c <= 0x7e; c++) text += String.fromCharCode(c); // Basic Latin
for (let c = 0xa0; c <= 0xff; c++) text += String.fromCharCode(c); // Latin-1 (©, accents)
text += "–—‘’“”•…™©®";

for (const f of readdirSync(SRC).filter((f) => f.endsWith(".woff2"))) {
  const input = readFileSync(`${SRC}/${f}`);
  const out = await subsetFont(input, text, { targetFormat: "woff2" });
  writeFileSync(`${OUT}/${f}`, out);
  console.log(`${f}: ${(input.length / 1024).toFixed(1)}KB -> ${(out.length / 1024).toFixed(1)}KB`);
}
