// Emulates a phone, reports elements wider than the viewport, and saves full-page screenshots.
import puppeteer from "puppeteer-core";
import { mkdirSync } from "node:fs";
const base = process.argv[2] || "http://localhost:3000";
const routes = (process.argv[3] || "/services,/services/supported-living,/eligibility,/housing,/about,/about/team,/about/service-coordinators,/careers,/contact").split(",");
const shots = process.argv.includes("--shots");
mkdirSync("reports/shots", { recursive: true });
const browser = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: "new", args: ["--no-sandbox", "--disable-gpu"] });
const page = await browser.newPage();
await page.setViewport({ width: 412, height: 915, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
for (const route of routes) {
  await page.goto(base + route, { waitUntil: "networkidle0" });
  const res = await page.evaluate(() => {
    const w = innerWidth, out = [];
    document.querySelectorAll("body *").forEach((el) => {
      const r = el.getBoundingClientRect();
      if ((r.right > w + 1 || r.left < -1) && r.width > 0 && getComputedStyle(el).position !== "absolute") {
        out.push(`${el.tagName.toLowerCase()}.${String(el.className || "").slice(0, 50)} w=${Math.round(r.width)} l=${Math.round(r.left)} r=${Math.round(r.right)}`);
      }
    });
    return { w, scrollW: document.documentElement.scrollWidth, n: out.length, out: out.slice(0, 12) };
  });
  console.log(`\n${route}: viewport ${res.w}, scrollWidth ${res.scrollW}, overflowing: ${res.n}`);
  res.out.forEach((l) => console.log("   ", l));
  if (shots) {
    const slug = route.replace(/^\//, "").replace(/\//g, "-") || "home";
    await page.screenshot({ path: `reports/shots/${slug}-mobile.png`, fullPage: true });
  }
}
await browser.close();
