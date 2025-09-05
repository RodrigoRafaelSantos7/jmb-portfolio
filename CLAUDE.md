# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a portfolio website for João Maria Botelho, Forbes 30 Under 30 honoree in Sustainability and Social Innovation, built with Astro.js and Tailwind CSS.

## Development Commands

```bash
# Install dependencies (using Bun or npm)
bun install

# Start development server at localhost:4321
bun run dev

# Build production site to ./dist/
bun run build

# Preview built site locally
bun run preview

# Format code using Biome
bun run format
```

## Code Quality
- **Formatter/Linter**: Biome is configured for code formatting and linting
- **TypeScript**: Strict mode is enabled
- **Format Settings**: 
  - Indent: 4 spaces (2 for markdown/yaml)
  - Line width: 160 characters
  - Single quotes for JS/TS
  - No trailing commas

## Architecture

### Technology Stack
- **Framework**: Astro.js with MDX support
- **Styling**: Tailwind CSS v4 via Vite plugin
- **Fonts**: Inter (variable) and Newsreader (variable) via Fontsource
- **Content**: Markdown/MDX collections for blog posts and projects

### Key Directories
- `src/content/` - Content collections (blog, projects, pages)
- `src/data/site-config.ts` - Main site configuration including navigation, hero content, and metadata
- `src/layouts/` - Page layout components
- `src/components/` - Reusable Astro components
- `src/pages/` - Page routes and API endpoints

### Content Management
- Blog posts: Add MDX files to `src/content/blog/`
- Projects: Add to `src/content/projects/`
- Site configuration: Edit `src/data/site-config.ts` for navigation, hero section, and social links

### Site Configuration
The main configuration is in `src/data/site-config.ts` which exports:
- Website URL, title, description, and metadata
- Navigation links (header and footer)
- Hero section content
- Social media links
- Posts/projects per page settings

### Build Output
The site builds to `./dist/` directory and is deployed to Vercel at https://jmb-portfolio.vercel.app/