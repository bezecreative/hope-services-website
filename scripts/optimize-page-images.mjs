// Converts the raw Figma exports in .figma-assets/ into web-sized files in public/images.
import sharp from "sharp";
const A = ".figma-assets", O = "public/images";
const jobs = [
  ["services/services-photo.png", "services-group.webp", 1000, { quality: 80 }],
  ["services/sl-48.png", "sl-kitchen.jpg", 900, { quality: 74 }],
  ["sl/photo1-r8.png", "sl-selfie.jpg", 900, { quality: 74 }],
  ["sl/photo2-r9.png", "sl-arena.jpg", 900, { quality: 74 }],
  ["sl/overlay-f38.png", "overlay-tree.jpg", 1024, { quality: 55 }],
  ["elig/photo.png", "elig-group.webp", 650, { quality: 82, alphaQuality: 90 }],
  ["elig/block-autism.png", "block-lake.jpg", 700, { quality: 55 }],
  ["elig/block-dd.png", "block-leaves.jpg", 700, { quality: 55 }],
  ["elig/block-injury.png", "block-plants.jpg", 700, { quality: 55 }],
  ["housing/photo.png", "housing-group.webp", 1000, { quality: 80, alphaQuality: 90 }],
  ["about/photo.png", "about-group.webp", 1000, { quality: 80, alphaQuality: 90 }],
  ["about/feat1.png", "about-carousel.jpg", 900, { quality: 74 }],
  ["about/feat2.png", "about-couple.jpg", 900, { quality: 74 }],
  ["about/overlay-f2.png", "collage-b.jpg", 1200, { quality: 55 }],
  ["about/feat-bg45.png", "collage-a.jpg", 1200, { quality: 55 }],
  ["team/tyler-r8.png", "team-tyler.jpg", 640, { quality: 78 }],
  ["team/ashley-r9.png", "team-ashley.jpg", 640, { quality: 78 }],
  ["team/tanner-r10.png", "team-tanner.jpg", 640, { quality: 78 }],
  ["team/alma-r11.png", "team-alma.jpg", 640, { quality: 78 }],
  ["team/overlay-f2.png", "overlay-team.jpg", 900, { quality: 55 }],
  ["careers/block-dsp.png", "careers-dsp.jpg", 800, { quality: 62 }],
  ["contact/photo.png", "contact-cupcakes.webp", 900, { quality: 80, alphaQuality: 90 }],
];
for (const [src, out, w, opts] of jobs) {
  const img = sharp(`${A}/${src}`).resize({ width: w, withoutEnlargement: true });
  const s = out.endsWith(".jpg") ? img.flatten({ background: "#fff" }).jpeg({ ...opts, mozjpeg: true }) : img.webp(opts);
  const info = await s.toFile(`${O}/${out}`);
  console.log(out.padEnd(24), info.width + "x" + info.height, Math.round(info.size / 1024) + "KB");
}
