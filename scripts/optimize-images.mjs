import sharp from "sharp";
const A = process.env.A, O = "public/images";
const jobs = [
  ["bg-hero.png", "bg-hero.jpg", 2200, {quality: 72}],
  ["bg-section.png", "bg-section.jpg", 2400, {quality: 70}],
  ["bg-cta-team.png", "bg-cta-team.jpg", 1200, {quality: 70}],
  ["bg-cta-live.png", "bg-cta-live.jpg", 900, {quality: 70}],
  ["bg-card-texture.png", "bg-card-texture.png", 602, {}],
  ["hero-photo.png", "hero-photo.webp", 1200, {quality: 82, alphaQuality: 90}],
  ["why-photo.png", "why-photo.webp", 1000, {quality: 82, alphaQuality: 90}],
];
for (const [src, out, w, opts] of jobs) {
  const img = sharp(A + "/" + src).resize({ width: w, withoutEnlargement: true });
  const ext = out.split(".").pop();
  const s = ext === "jpg" ? img.jpeg({ ...opts, mozjpeg: true }) : ext === "webp" ? img.webp(opts) : img.png({ compressionLevel: 9 });
  const info = await s.toFile(O + "/" + out);
  console.log(out, info.width, info.height, Math.round(info.size / 1024) + "KB");
}
