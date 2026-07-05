import { decks } from '~/composables/useProduct'

// Auto-generated sitemap. Product URLs are derived from the single source of
// truth (`decks` + `has_landing_page`), so adding/removing a card updates the
// sitemap automatically — no hand-editing. Static routes are listed explicitly.
//
// `has_landing_page` mirrors which slugs have an entry in
// composables/cards/decks_lp.ts (that file can't be imported here because it
// pulls in .vue components, which Nitro won't bundle).

const SITE_URL = 'https://tokotangankanan.com'

// Captured once at server start ≈ last deploy date. Honest and stable within a
// deploy, unlike a per-request `new Date()` which would churn every day.
const GENERATED_AT = new Date().toISOString().slice(0, 10)

type SitemapUrl = { loc: string; changefreq: string; priority: string }

const staticRoutes: SitemapUrl[] = [
    { loc: '/', changefreq: 'weekly', priority: '1.0' },
    { loc: '/cards', changefreq: 'weekly', priority: '0.9' },
    { loc: '/faq', changefreq: 'monthly', priority: '0.7' },
]

export default defineEventHandler((event) => {
    const productRoutes: SitemapUrl[] = decks
        .filter((d) => d.has_landing_page)
        .map((d) => ({
            loc: `/cards/${d.slug}`,
            changefreq: 'monthly',
            priority: '0.9',
        }))

    const body = [...staticRoutes, ...productRoutes]
        .map(
            (u) => `  <url>
    <loc>${SITE_URL}${u.loc}</loc>
    <lastmod>${GENERATED_AT}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
        )
        .join('\n')

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`

    setHeader(event, 'content-type', 'application/xml; charset=utf-8')
    setHeader(event, 'cache-control', 'public, max-age=3600')
    return xml
})
