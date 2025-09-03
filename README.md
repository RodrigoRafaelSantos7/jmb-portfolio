# João Maria Botelho - Portfolio Website

A modern, responsive portfolio website for João Maria Botelho, Forbes 30 Under 30 honoree in Sustainability and Social Innovation. Built with Astro.js and Tailwind CSS, featuring a clean, professional design that showcases his work in ESG, sustainable finance, and sustainability law.

## About João Maria Botelho

João Maria Botelho is a jurist and sustainability leader recognized as one of Portugal's youngest voices shaping ESG, sustainable finance, and sustainability. He is a Forbes 30 Under 30 (2024) honoree, Global Shaper under the World Economic Forum, and serves on the Board of Alumni of NOVA School of Law.

## Features

- ✅ Modern, responsive design optimized for professional portfolios
- ✅ Dark and light color modes
- ✅ Hero section with professional bio
- ✅ Project showcase and portfolio collection
- ✅ Blog functionality for thought leadership content
- ✅ Contact and subscription forms
- ✅ SEO-optimized with canonical URLs and OpenGraph data
- ✅ Mobile-first responsive layout
- ✅ Fast page transitions and performance optimization

## Tech Stack

- **Framework**: [Astro.js](https://astro.build) - Modern static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **Typography**: Inter and Newsreader fonts via Fontsource
- **Content**: Markdown and MDX support for blog posts and projects
- **Build Tools**: Biome for code formatting and linting

## Project Structure

```
├── public/           # Static assets (images, favicon, etc.)
├── src/
│   ├── components/   # Reusable Astro components
│   ├── content/      # Content collections (blog, projects, pages)
│   ├── data/         # Site configuration and data
│   ├── layouts/      # Page layouts
│   ├── pages/        # Page routes and API endpoints
│   ├── styles/       # Global styles and utilities
│   └── utils/        # Utility functions
├── astro.config.mjs  # Astro configuration
└── package.json      # Dependencies and scripts
```

## Development

### Prerequisites

- Node.js (v18 or higher)
- Bun (recommended) or npm

### Getting Started

1. Clone the repository
```bash
git clone <repository-url>
cd jmb-portfolio
```

2. Install dependencies
```bash
bun install
# or
npm install
```

3. Start the development server
```bash
bun run dev
# or
npm run dev
```

The site will be available at `http://localhost:4321`

### Available Commands

| Command | Action |
|---------|--------|
| `bun run dev` | Start development server at `localhost:4321` |
| `bun run build` | Build production site to `./dist/` |
| `bun run preview` | Preview build locally before deploying |
| `bun run format` | Format code using Biome |

## Content Management

### Blog Posts
Add new blog posts as Markdown files in `src/content/blog/`. Each post should include frontmatter with title, description, date, and other metadata.

### Projects
Showcase projects by adding them to `src/content/projects/`. Include project details, technologies used, and links.

### Site Configuration
Update site settings, navigation, and personal information in `src/data/site-config.ts`.

## Deployment

The site is configured for deployment on various platforms:

- **Netlify**: Connect your repository for automatic deployments
- **Vercel**: Zero-configuration deployment for Astro projects
- **GitHub Pages**: Use GitHub Actions for automated deployment

Build the project with `bun run build` and deploy the `dist/` directory.

## License

Licensed under the [GPL-3.0](./LICENSE) license.

---

*This portfolio showcases the professional work and thought leadership of João Maria Botelho in the fields of ESG, sustainable finance, and sustainability law.*
