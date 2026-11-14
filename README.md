# Ekaterina Sycheva | Graphic Designer

Astro static portfolio migrated from the supplied HTML prototype. Original visual style and routes retained. Pages CMS is configured through `.pages.yml`.

## Local setup

```bash
npm install
npm run dev
```

Visit `http://localhost:4321/`.

## GitHub + Pages CMS

1. Create a new GitHub repository and upload the contents of this folder to its root (including `.pages.yml`).
2. Open https://pagescms.org/ and sign in with GitHub, authorize the repository, and select it.
3. Edit **Projects**, **Press**, **Awards & Exhibitions**, or **About**. Pages CMS saves edits as Git commits. Add original images to the CMS media library.
4. For publishing, connect the repository to a static hosting provider (for example Cloudflare Pages or Netlify), set build command `npm run build` and output directory `dist`.
5. Configure environment variable `PUBLIC_SITE_URL` to the **real final HTTPS domain** (e.g. your own domain, not a placeholder). Redeploy. Astro then outputs absolute canonical URLs and `sitemap-index.xml`/`sitemap-0.xml` via @astrojs/sitemap. Robots allows crawling.
6. After publishing, submit the sitemap in Google Search Console and verify pages.

## Content publishing rules

- Only Bercut IT Product Identity is enabled as a project from the supplied prototype. Five sample projects are saved with `published: false` and produce **no** project pages or cards.
- Bercut has a clearly labeled missing-artwork placeholder; replace with original artwork before public launch.
- Press texts and URLs are copied from the supplied HTML; verify the 74.ru summary and all articles before publishing. Each entry has its own description and original URL.
- Awards currently contain the two entries from the source; add verified information and documentation via CMS.
- Use `published: false` for drafts. When creating a new project, make its JSON filename match its `slug` field; the page path is `/work/<slug>/`.
- All public pages are indexable by default. There are no hash URLs or noindex tags.

## SEO

Static routes, distinct titles/descriptions, canonical when domain is set, Person and CreativeWork JSON-LD, OG metadata, XML sitemap when domain is set, semantic HTML, responsive images, alt text in gallery. Do not set a made-up canonical domain.

## Design

Retains the prototype's Inter 400/500 typography, 3/2/1 column image grid, sticky navigation, hover labels, project description and gallery, neutral colors, responsive layout.
