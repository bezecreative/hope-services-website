// Runs Lighthouse (mobile + desktop) against a URL and prints category scores
// plus the failing/low-scoring audits so we can iterate.
import { spawnSync } from "node:child_process";
import { readFileSync, mkdirSync } from "node:fs";

const url = process.argv[2] || "http://localhost:3000/";
mkdirSync("reports", { recursive: true });

const runs = [
  { name: "mobile", args: [] },
  { name: "desktop", args: ["--preset=desktop"] },
];

for (const run of runs) {
  const out = `reports/lh-${run.name}.json`;
  const res = spawnSync(
    "npx",
    [
      "lighthouse",
      url,
      "--quiet",
      "--output=json",
      `--output-path=${out}`,
      "--only-categories=performance,seo,accessibility,best-practices",
      "--chrome-flags=--headless=new --no-sandbox --disable-gpu",
      ...run.args,
    ],
    { stdio: ["ignore", "inherit", "inherit"], env: process.env }
  );
  if (res.status !== 0) {
    console.error(`lighthouse ${run.name} exited ${res.status}`);
    continue;
  }
  const lhr = JSON.parse(readFileSync(out, "utf8"));
  const cats = Object.fromEntries(
    Object.entries(lhr.categories).map(([k, v]) => [k, Math.round(v.score * 100)])
  );
  console.log(`\n=== ${run.name.toUpperCase()} ===`, cats);
  const a = lhr.audits;
  const metrics = ["first-contentful-paint", "largest-contentful-paint", "total-blocking-time", "cumulative-layout-shift", "speed-index"];
  for (const m of metrics) console.log(`  ${m}: ${a[m]?.displayValue} (score ${Math.round((a[m]?.score ?? 0) * 100)})`);
  const lcpEl = a["largest-contentful-paint-element"]?.details?.items?.[0]?.items?.[0]?.node?.snippet;
  if (lcpEl) console.log("  LCP element:", lcpEl.slice(0, 160));
  for (const cat of ["performance", "seo"]) {
    const refs = lhr.categories[cat].auditRefs;
    const bad = refs
      .map((r) => a[r.id])
      .filter((x) => x && x.score !== null && x.score < 0.9 && x.scoreDisplayMode !== "informative")
      .sort((x, y) => x.score - y.score);
    if (bad.length) {
      console.log(`  -- ${cat} audits < 90:`);
      for (const b of bad) console.log(`     [${Math.round(b.score * 100)}] ${b.id}: ${b.displayValue || b.title}`);
    }
  }
}
