// Runs Lighthouse (mobile + desktop) for every route and prints a score table.
import { spawnSync } from "node:child_process";
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";

const base = process.argv[2] || "http://localhost:3000";
const routes = (process.argv[3] || "/,/services,/services/supported-living,/eligibility,/housing,/about,/about/team,/about/service-coordinators,/careers,/contact").split(",");
mkdirSync("reports/all", { recursive: true });
const rows = [];
for (const route of routes) {
  const slug = route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "-");
  for (const ff of ["mobile", "desktop"]) {
    const out = `reports/all/${slug}-${ff}.json`;
    const res = spawnSync("npx", ["lighthouse", base + route, "--quiet", "--output=json", `--output-path=${out}`, "--only-categories=performance,seo,accessibility,best-practices", "--chrome-flags=--headless=new --no-sandbox --disable-gpu", ...(ff === "desktop" ? ["--preset=desktop"] : [])], { stdio: ["ignore", "ignore", "inherit"] });
    if (res.status !== 0) { rows.push({ route, ff, error: res.status }); continue; }
    const lhr = JSON.parse(readFileSync(out, "utf8"));
    const c = (k) => Math.round(lhr.categories[k].score * 100);
    const a = lhr.audits;
    const low = ["performance", "seo"].flatMap((cat) => lhr.categories[cat].auditRefs.map((r) => a[r.id]).filter((x) => x && x.score !== null && x.score < 0.9 && x.scoreDisplayMode !== "informative" && !x.id.endsWith("-insight")).map((x) => `${x.id}:${Math.round(x.score * 100)}`));
    rows.push({ route, ff, perf: c("performance"), seo: c("seo"), a11y: c("accessibility"), bp: c("best-practices"), lcp: a["largest-contentful-paint"].displayValue, cls: a["cumulative-layout-shift"].displayValue, low: low.join(" ") });
  }
}
writeFileSync("reports/all/summary.json", JSON.stringify(rows, null, 2));
console.log("route".padEnd(32), "ff".padEnd(8), "perf seo a11y bp   LCP     CLS   low-audits");
for (const r of rows) console.log(r.route.padEnd(32), r.ff.padEnd(8), r.error != null ? "ERROR " + r.error : `${String(r.perf).padEnd(4)} ${String(r.seo).padEnd(3)} ${String(r.a11y).padEnd(4)} ${String(r.bp).padEnd(4)} ${String(r.lcp).padEnd(7)} ${String(r.cls).padEnd(5)} ${r.low}`);
