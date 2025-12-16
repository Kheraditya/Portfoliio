# Kher Portfolio (Next.js)

Funky, product-like portfolio:
- Projects (case-study style)
- GitHub panel (repos + profile)
- Blog (MDX)
- Playground (mini CLI)
- Contact page
- Resume download at `/resume.pdf`

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Customize

- Projects: `data/projects.ts`
- Blog posts: `content/blog/*.mdx`
- Hero copy: `components/Hero.tsx`
- Links: `components/Navbar.tsx` + `app/contact/page.tsx`


## Notes
- GitHub repo list is intentionally hidden. Only profile + contributions heatmap are shown.
- Admin dashboard is an interactive mock at `/admin-demo`.
