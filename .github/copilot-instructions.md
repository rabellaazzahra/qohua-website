# Copilot Instructions for Qohua Website

## Project Overview
This is a **RoastPro Equipment website** - a Next.js 15 application showcasing professional coffee/grain roasting equipment. The project is built with v0.app and auto-syncs deployments, making it a **living prototype** that's continuously updated via v0 interface.

## Architecture & Key Patterns

### Stack & Structure
- **Next.js 15** with App Router (`app/` directory)
- **shadcn/ui** components with Radix UI primitives
- **Tailwind CSS v4** with CSS variables and design tokens
- **TypeScript** with strict configuration
- **pnpm** with workspace configuration for optimized builds

### Component Organization
```
components/
├── ui/           # shadcn/ui components (Button, Dialog, etc.)
├── navbar.tsx    # Main navigation with mobile responsive menu
├── hero-carousel.tsx  # Auto-rotating image carousel with manual controls
├── product-section.tsx  # Product showcase grid
└── [other-sections].tsx  # Landing page sections
```

### Design System Conventions
- Use `cn()` utility from `@/lib/utils` for conditional className merging
- Leverage CSS variables for theming (`--primary`, `--foreground`, etc.)
- Follow shadcn/ui patterns: `variant` and `size` props with `cva()` for styling variants
- All interactive components use `"use client"` directive

### Development Workflow
```bash
# Development (recommended)
pnpm dev

# Production build
pnpm build
pnpm start

# Linting disabled in build (see next.config.mjs)
pnpm lint
```

## Critical Implementation Details

### v0.app Integration
- **DO NOT** manually edit core functionality - use v0.app interface for major changes
- This repository **auto-syncs** with v0 deployments
- Focus manual edits on configuration, optimization, and tooling

### Image Handling
- All images in `public/` directory with placeholder naming pattern
- Images are **unoptimized** (see `next.config.mjs`) for v0.app compatibility
- Use `/placeholder-*.png` pattern for consistent asset naming

### Component Patterns
1. **Client Components**: Interactive components require `"use client"`
2. **State Management**: Use `useState` for local state (see `hero-carousel.tsx`)
3. **Responsive Design**: Mobile-first with Tailwind breakpoints (`md:`, `lg:`)
4. **Navigation**: Hash-based internal linking (`href="#section"`)

### TypeScript Configuration
- Path aliases: `@/*` maps to project root
- Strict mode enabled but **build errors ignored** in Next.js config
- ES6 target for broader compatibility

### Styling Approach
- **Semantic color tokens**: `text-foreground`, `bg-background`, `border-border`
- **Component variants**: Use `buttonVariants` pattern for consistent styling
- **Responsive utilities**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` container pattern

## File-Specific Guidelines

### `/components/ui/button.tsx`
- Follows shadcn/ui variant pattern with `cva()`
- Supports `asChild` prop for composition
- Focus rings and accessibility built-in

### `/app/page.tsx`
- Simple component composition - main sections in order
- Each section is a separate component for modularity

### `/components/navbar.tsx`
- Mobile-first responsive navigation
- Uses hash navigation for single-page app behavior
- State management for mobile menu toggle

### `/lib/utils.ts`
- Standard `cn()` utility for className merging
- Essential for conditional styling patterns

## When Making Changes

1. **UI/UX Changes**: Use v0.app interface when possible
2. **Configuration**: Edit directly (next.config.mjs, tsconfig.json)
3. **New Components**: Follow shadcn/ui patterns and project structure
4. **Styling**: Use existing design tokens and responsive patterns
5. **Testing**: Run `pnpm build` to ensure no breaking changes

## Common Gotchas
- Build errors are **ignored** - check manually with TypeScript
- Images must be in `public/` and referenced with leading `/`
- Mobile navigation requires `useState` and client-side rendering
- Hash navigation won't trigger page reloads - use for SPA behavior
