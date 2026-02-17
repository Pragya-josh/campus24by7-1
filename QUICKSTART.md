# Quick Start Guide - Campus24by7 Refactored

## 🚀 Getting Started

### Prerequisites
- Node.js v16 or higher
- npm or bun package manager

### Installation

1. **Install Dependencies**
```bash
npm install
# or
bun install
```

2. **Create Environment File**
```bash
cp .env.example .env.local
```

3. **Start Development Server**
```bash
npm run dev
# or
bun run dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure Overview

```
src/
├── components/           # React components
│   ├── layout/          # Layout wrappers
│   ├── sections/        # Page sections
│   ├── ui/             # shadcn-ui components
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── FeaturesSection.tsx
│   ├── ModulesSection.tsx
│   ├── PricingSection.tsx
│   ├── BenefitsSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   └── common.tsx       # Reusable utilities
├── pages/               # Page components
├── hooks/               # Custom hooks
├── lib/                 # Utilities (cn, etc)
├── types/               # TypeScript definitions
├── constants/           # App data & constants
├── config/              # App configuration
└── App.tsx
```

## 🔧 Available Scripts

### Development
```bash
npm run dev         # Start dev server on port 5173
npm run preview     # Preview production build
```

### Production
```bash
npm run build       # Build for production (outputs to /dist)
npm run build:dev   # Build in development mode
```

### Code Quality
```bash
npm run lint        # Run ESLint
npm run type-check  # Run TypeScript compiler
```

## 🎯 Key Features of Refactored Codebase

### ✅ Centralized Constants
All hardcoded data is now in `/src/constants/index.ts`:
- `NAV_LINKS` - Navigation menu
- `HERO_HIGHLIGHTS` - Hero section data
- `FEATURES` - Feature list
- `MODULES` - User portals
- `PRICING_PLANS` - Pricing information
- `TESTIMONIALS` - Customer testimonials

### ✅ Reusable Components
Common utilities in `/src/components/common.tsx`:
- `SectionHeader` - Standardized section headers
- `SectionContainer` - Consistent section wrapper
- `ResponsiveGrid` - Responsive grid layout
- `Card` - Interactive card component
- `IconWrapper` - Icon styling

### ✅ Type Safety
Full TypeScript with strict mode:
- Type definitions in `/src/types/index.ts`
- Interfaces for all data structures
- IDE autocompletion support
- Compile-time error checking

### ✅ Configuration Management
Centralized app config in `/src/config/app.config.ts`:
- API endpoints
- Feature flags
- Theme settings
- Pagination defaults

## 📚 Documentation Files

- **`README.md`** - Project overview
- **`CONTRIBUTING.md`** - Development guidelines
- **`ARCHITECTURE.md`** - Detailed architecture documentation
- **`REFACTORING_SUMMARY.md`** - Complete refactoring details
- **`.env.example`** - Environment variable template

## 🔄 Adding New Content

### Update Navigation Links
Edit `src/constants/index.ts`:
```typescript
export const NAV_LINKS: NavLink[] = [
  { name: "Features", href: "#features" },
  // Add new links here
];
```

### Add a New Feature
1. Add feature data to `FEATURES` array in constants
2. Update component to use `FEATURES` from constants
3. Component automatically renders new data

### Add Pricing Plan
1. Add plan to `PRICING_PLANS` array in constants
2. `PricingSection` automatically displays new plan

### Change App Configuration
Edit `src/config/app.config.ts`:
```typescript
export const APP_CONFIG = {
  name: "Campus24by7",
  // Update settings here
  api: {
    baseUrl: "https://your-api.com",
  },
};
```

## 🎨 Styling

### Tailwind CSS
- Utility-first CSS framework
- Responsive classes (sm:, md:, lg:, xl:)
- Custom CSS classes in `src/index.css`

### shadcn-ui Components
- Pre-built, customizable components
- Located in `src/components/ui/`
- Built on Radix UI primitives

### Theme Colors
- Primary: Blue (#3b82f6)
- Accent: Cyan (#06b6d4)
- Custom gradients via CSS classes

## 🧪 Quality Assurance

### Type Checking
```bash
npm run type-check
# Verify no TypeScript errors
```

### Linting
```bash
npm run lint
# Check code quality and style
```

### Build Verification
```bash
npm run build
# Ensure production build succeeds
```

## 📱 Responsive Design

The project uses responsive Tailwind classes:
- Mobile-first approach
- `sm:` - Small devices (640px)
- `md:` - Medium devices (768px)
- `lg:` - Large devices (1024px)
- `xl:` - Extra large (1280px)

All components are fully responsive.

## 🔐 Environment Variables

Create `.env.local` based on `.env.example`:

```env
VITE_API_URL=https://api.campus24by7.com
VITE_ENV=development
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_THEME_TOGGLE=true
VITE_ENABLE_NOTIFICATIONS=true
VITE_BETA_FEATURES=false
```

Access in code:
```typescript
import { APP_CONFIG } from "@/config/app.config";
const apiUrl = APP_CONFIG.api.baseUrl;
```

## 🐛 Troubleshooting

### Port Already in Use
Edit `vite.config.ts` and change port in server config.

### TypeScript Errors
Run `npm run type-check` to see specific errors.

### Build Failures
```bash
rm -r node_modules dist
npm install
npm run build
```

### Module Not Found
Verify imports use correct paths with `@/` alias.

## 📚 Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn-ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)

## 🤝 Contributing

See `CONTRIBUTING.md` for:
- Code structure guidelines
- Naming conventions
- Development standards
- Commit guidelines

## 📧 Support

For questions or issues:
- Email: support@campus24by7.com
- Check ARCHITECTURE.md for detailed documentation
- Review existing code patterns

## ✨ Next Steps

1. Familiarize yourself with the project structure
2. Read ARCHITECTURE.md for detailed information
3. Follow CONTRIBUTING.md guidelines
4. Start building features!

Happy coding! 🎉
