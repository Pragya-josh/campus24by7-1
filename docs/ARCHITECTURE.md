# Project Architecture

## Overview

Campus24by7 is a modern, responsive web application built with:
- **Vite**: Fast build tool and dev server
- **React 18**: UI framework with hooks
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first styling
- **shadcn-ui**: High-quality component library
- **React Router**: Client-side routing
- **React Query**: Data fetching and caching

## Directory Structure

### `/src/components`
Core React components organized by purpose:

- **`/layout`**: Layout wrapper components for page structure
- **`/sections`**: Major page sections (Hero, Features, Pricing, etc.)
- **`/ui`**: Reusable shadcn-ui components
- **`common.tsx`**: Reusable component utilities and helpers

Key components:
- `SectionHeader`: Standardized section header component
- `SectionContainer`: Wrapper for consistent section styling
- `ResponsiveGrid`: Responsive grid layout component
- `Card`: Reusable card component with hover effects
- `IconWrapper`: Icon container with styling

### `/src/pages`
Top-level page components:
- `Index.tsx`: Homepage with all sections
- `NotFound.tsx`: 404 error page

### `/src/types`
TypeScript type definitions:
- `Feature`: Feature item structure
- `Module`: Module/portal structure
- `PricingPlan`: Pricing plan structure
- `Testimonial`: Testimonial structure
- `NavLink`: Navigation link structure
- `SectionHeaderProps`: Section header component props

### `/src/constants`
Centralized application data:
- `NAV_LINKS`: Navigation menu items
- `FEATURES`: Feature list data
- `MODULES`: User portal modules
- `PRICING_PLANS`: Pricing plan information
- `TESTIMONIALS`: Testimonial data
- `HERO_HIGHLIGHTS`: Hero section highlights

### `/src/config`
Application configuration:
- `app.config.ts`: Centralized app configuration
  - Application metadata
  - External links
  - API endpoints
  - Feature flags
  - Theme settings

### `/src/hooks`
Custom React hooks:
- `use-mobile.tsx`: Mobile device detection
- `use-toast.ts`: Toast notification hook

### `/src/lib`
Utility functions:
- `utils.ts`: Class name merging utility (`cn()`)

## Data Flow

### Single-Direction Props Flow
```
App.tsx
  ↓
Layout (Navbar + Sections)
  ↓
Section Components (FeaturesSection, PricingSection, etc.)
  ↓
Common Components (SectionHeader, Card, etc.)
  ↓
UI Components (Button, etc.)
```

### Constants to Components
```
/constants/index.ts
  ↓
Components import data
  ↓
Components render with imported data
```

## Styling Strategy

### Tailwind CSS + Shadcn-ui
- Base components from shadcn-ui with Radix UI underneath
- Tailwind CSS for custom styling and utilities
- CSS custom properties for theming
- Gradient effects via custom CSS classes

### Key CSS Classes
- `.gradient-bg`: Gradient background
- `.gradient-text`: Gradient text effect
- `.animate-fade-up`: Fade up animation
- `.shadow-card`: Card shadow effect

## Performance Optimizations

1. **Component Code Splitting**: Sections are lazy-loaded
2. **Image Optimization**: Through Vite's asset handling
3. **CSS Bundling**: Tailwind purges unused styles
4. **Tree Shaking**: Only imported utilities are included

## Configuration Management

### Environment Variables
See `.env.example` for available configuration:
```
VITE_API_URL          # API endpoint
VITE_ENV              # Environment (development/production)
VITE_ENABLE_ANALYTICS # Feature flag
VITE_ENABLE_THEME_TOGGLE # Feature flag
VITE_ENABLE_NOTIFICATIONS # Feature flag
```

### Runtime Configuration
`src/config/app.config.ts`:
- Application metadata
- Feature flags
- API configuration
- Theme settings
- Pagination defaults

## Type Safety

### Strict TypeScript Configuration
- `strict: true` - All strict type checking enabled
- `noImplicitAny: true` - No implicit any types
- `strictNullChecks: true` - Strict null checking
- `noUnusedLocals: true` - Detect unused variables
- `noUnusedParameters: true` - Detect unused parameters

All components are properly typed with interfaces for props.

## Testing Strategy

### Current Testing
- ESLint for code quality
- TypeScript compiler for type checking

### Recommended Testing
- Unit tests: Jest + React Testing Library
- E2E tests: Cypress or Playwright
- Visual regression: Percy or Chromatic

## Deployment

### Build Process
```bash
npm run build
```
Outputs optimized production files to `/dist`

### Preview Production Build
```bash
npm run preview
```

## Security Considerations

1. **Input Validation**: Use Zod for form validation
2. **XSS Protection**: React's built-in XSS protection
3. **CSRF Protection**: Implement on API endpoints
4. **Environment Variables**: Sensitive data in `.env`

## Future Enhancements

1. Add API integration layer
2. Implement global state management (Redux/Zustand)
3. Add authentication/authorization
4. Create API client with React Query
5. Add unit and E2E tests
6. Implement dark mode
7. Add analytics integration
8. Performance monitoring

## Troubleshooting

### TypeScript Errors
Run `npm run type-check` to identify type issues.

### Build Issues
Clear node_modules and reinstall:
```bash
rm -r node_modules
npm install
npm run build
```

### Port Already in Use
Change port in `vite.config.ts` server configuration.
