import type { APIRoute } from 'astro';
import { getSiteUrl, publicSiteRoutes } from '../data/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const today = new Date().toISOString().split('T')[0];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicSiteRoutes
  .map(
    (route) => `  <url>
    <loc>${getSiteUrl(route.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
