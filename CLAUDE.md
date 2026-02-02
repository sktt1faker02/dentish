# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a WordPress wp-content directory for "Dentish" - a dental practice website running on Local by Flywheel (dentish.local). The active theme is `dentish-block-theme`, a modern Gutenberg full-site editing theme.

## Development Commands

All commands run from `themes/dentish-block-theme/`:

```bash
npm run start          # Watch mode for block development (compiles JS/CSS, copies PHP, generates blocks manifest)
npm run build          # Production build for blocks
npm run sass           # Watch SCSS: css/scss/main.scss → css/main.css
npm run lint:js        # Lint JavaScript
npm run lint:css       # Lint styles
npm run format         # Format code
```

## Architecture

- Custom blocks in `src/` directory
- Build output in `build/` directory
- Theme settings in `theme.json`

### Custom Gutenberg Blocks

Located in `themes/dentish-block-theme/src/`:

| Block | Purpose |
|-------|---------|
| `myheader` | Site header |
| `myfooter` | Site footer |
| `hero-banner` | Hero section |
| `generic-button` | Reusable button component |
| `generic-heading` | Reusable heading component |
| `generic-image` | Image component |
| `generic-intro` | Introduction content |
| `two-column-layout` | Layout structure |
| `our-services` | Services grid container |
| `service-item` | Individual service card |
| `blocks-blog` | Blog listing |

Each block follows WordPress block structure: `block.json`, `edit.js`, `save.js`, `index.js`, and optional `style.scss`/`editor.scss`.

### Design Tokens

Defined in `themes/dentish-block-theme/theme.json`:

- **Primary**: #001a78 (dark blue)
- **Secondary**: #00ce9c (teal/mint)
- **Content width**: 840px
- **Wide width**: 1200px

### Active Plugins

- **Font Awesome** - Icon library (used for navigation icons, social media)
- **SVG Support** - SVG upload handling (used for logo)
- **Yoast SEO** - Search optimization
- **Regenerate Thumbnails** - Image processing utility
