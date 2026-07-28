import { ebooks } from "@/content/ebooks";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://drbrunoaquino.med.br";
  const now = new Date();
  const staticPages = [
    { url: `${base}/`, lastModified: now, priority: 1 },
    { url: `${base}/ebooks`, lastModified: now, priority: 0.9 },
    { url: `${base}/quem-sou`, lastModified: now, priority: 0.7 },
    { url: `${base}/capitulo-gratis`, lastModified: now, priority: 0.9 },
    { url: `${base}/ebooks/kit-completo`, lastModified: now, priority: 0.9 },
    { url: `${base}/curso`, lastModified: now, priority: 0.9 },
    { url: `${base}/curso/aula-gratis`, lastModified: now, priority: 0.8 },
  ];
  const ebookPages = ebooks.map((e) => ({
    url: `${base}/ebooks/${e.slug}`,
    lastModified: now,
    priority: 0.8,
  }));
  return [...staticPages, ...ebookPages];
}
