# Contributing Guidelines

## Code Structure

This project follows a modular, well-organized structure:

### Directory Organization

```
src/
├── components/          # React components
│   ├── layout/         # Layout wrapper components
│   ├── sections/       # Page section components
│   ├── ui/            # shadcn-ui components
│   └── common.tsx      # Reusable component utilities
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
├── constants/          # Application constants and data
├── config/             # Configuration files
└── styles/             # Global styles
```

## Development Standards

### TypeScript
- All new code must be TypeScript with strict mode enabled
- Use proper type annotations - no implicit `any`
- Define interfaces/types for props and data structures

### Component Patterns
- Use functional components with hooks
- Extract reusable components to `common.tsx`
- Keep components focused and single-responsibility

### Constants & Configuration
- Move hardcoded values to `src/constants/index.ts`
- Use `src/config/app.config.ts` for app-wide settings
- Define data structures in `src/types/index.ts`

### Naming Conventions
- Components: PascalCase (e.g., `FeaturesSection.tsx`)
- Functions/Variables: camelCase (e.g., `handleClick`)
- Constants: UPPER_SNAKE_CASE (e.g., `NAV_LINKS`)
- Files: PascalCase for components, camelCase for utilities

### Styling
- Use Tailwind CSS for styling
- Leverage shadcn-ui components
- Use the `cn()` utility for conditional class names

## Commit Guidelines

- Write clear, descriptive commit messages
- Keep commits atomic and focused
- Reference issues when applicable

## Code Quality

- Run `npm run lint` before committing
- Run `npm run type-check` to verify TypeScript
- Ensure responsive design works across devices
- Test in modern browsers

## Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env.local` and configure
3. Run `npm install` or `bun install`
4. Run `npm run dev` to start development server
5. Create a new branch for your changes
6. Make your changes following the guidelines
7. Submit a pull request

## Questions?

Contact the development team at support@campus24by7.com
