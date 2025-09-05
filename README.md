# João Maria Botelho - Portfolio Website

A professional portfolio website for João Maria Botelho, Forbes 30 Under 30 honoree in Sustainability and Social Innovation, showcasing his work in ESG, sustainable finance, and sustainability law.

## 🌟 About

João Maria Botelho (LL.B, NOVA School of Law) is a jurist recognised as one of **Forbes 30 Under 30 (2024)** in Sustainability and Social Innovation. He serves on the Board of Alumni of NOVA School of Law and is the founder of Generation Resonance, an international platform of young leaders protocolled with the United Nations Association of Portugal.

Key roles include:
- Global Shaper under the World Economic Forum
- Ambassador of the EU Green Deal in Portugal
- Award winner for Financial Literacy and Entrepreneurship (Santander Foundation)
- ESG thought leader recognized by Randstad

## ✨ Features

- **Professional Portfolio**: Showcase of achievements and impact in sustainability
- **Generation Resonance**: Dedicated section for the international youth leadership platform
- **Responsive Design**: Optimized for all devices with smooth scrolling
- **Analytics**: Integrated Vercel Analytics for visitor insights
- **SEO Optimized**: Meta tags, OpenGraph data, and sitemap generation
- **Fast Performance**: Static site generation with optimized assets
- **Contact Forms**: Direct communication channels with subscription options

## 🛠 Tech Stack

- **Framework**: [Astro.js v5](https://astro.build) - Static site generator
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) via Vite plugin
- **Typography**: Inter and Newsreader variable fonts via Fontsource
- **Content**: MDX support for dynamic content
- **Analytics**: Vercel Analytics integration
- **Deployment**: Vercel platform
- **Code Quality**: Biome for formatting and linting

## 📁 Project Structure

```
├── public/               # Static assets (images, favicon, etc.)
├── src/
│   ├── components/       # Reusable Astro components
│   ├── content/          # Content collections (blog, projects, pages)
│   ├── data/
│   │   └── site-config.ts # Main site configuration
│   ├── layouts/          # Page layouts
│   ├── pages/            # Page routes and API endpoints
│   ├── styles/           # Global styles and Tailwind config
│   └── utils/            # Utility functions
├── astro.config.mjs      # Astro configuration
├── biome.json           # Code formatting configuration
├── CLAUDE.md            # AI assistant instructions
└── package.json         # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/jmb-portfolio.git
cd jmb-portfolio
```

2. Install dependencies:
```bash
bun install
# or npm install
```

3. Start development server:
```bash
bun run dev
# or npm run dev
```

Visit `http://localhost:4321` to see the site.

### 📝 Available Commands

| Command | Description |
|---------|------------|
| `bun run dev` | Start development server at localhost:4321 |
| `bun run build` | Build production site to ./dist/ |
| `bun run preview` | Preview production build locally |
| `bun run format` | Format code with Biome |
| `bun run start` | Alias for dev server |

## ⚙️ Configuration

### Site Configuration
Edit `src/data/site-config.ts` to customize:
- Site metadata (title, description, URL)
- Navigation links (header and footer)
- Hero section content
- Social media links
- Posts and projects per page

### Content Management

**Blog Posts**: Add MDX files to `src/content/blog/` with frontmatter:
```mdx
---
title: "Your Post Title"
description: "Post description"
date: "2024-01-01"
draft: false
---
```

**Projects**: Add to `src/content/projects/` with project details and technologies.

**Pages**: Custom pages in `src/content/pages/` for About, Achievements, etc.

## 🌐 Deployment

The site is deployed on **Vercel** at https://jmb-portfolio.vercel.app/

To deploy your own instance:

1. Build the project:
```bash
bun run build
```

2. Deploy the `./dist/` directory to your hosting platform:
   - **Vercel**: Connect GitHub repo for automatic deployments
   - **Netlify**: Drag and drop dist folder or connect repo
   - **Custom**: Upload dist contents to any static host

## 📊 Analytics

The site includes Vercel Analytics for tracking visitor insights and performance metrics.

## 🔧 Development Notes

- **Formatting**: Biome configured with 4-space indentation (2 for markdown/yaml)
- **TypeScript**: Strict mode enabled
- **Tailwind CSS v4**: Using new Vite plugin configuration
- **Code Style**: Single quotes for JS/TS, no trailing commas

## 📄 License

Licensed under the [GPL-3.0](./LICENSE) license.

---

**Live Site**: [https://www.joaomariabotelho.com/](https://joaomariabotelho.com/)
