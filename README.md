# EWorkshop - Angular Web Application

![Angular](https://img.shields.io/badge/Angular-10.0.5-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3.9.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-6.5.5-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-Styling-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Jasmine](https://img.shields.io/badge/Jasmine-Testing-8A4182?style=for-the-badge&logo=jasmine&logoColor=white)

A modern, scalable Angular web application built with industry best practices, featuring a clean architecture, comprehensive testing infrastructure, and production-ready configuration.

---

## Overview

EWorkshop is a professionally architected Angular application that demonstrates modern frontend development practices. The project showcases expertise in component-based architecture, reactive programming with RxJS, and a robust development workflow with automated testing and optimized production builds.

---

## Key Technical Highlights

### Architecture & Design Patterns
- **Component-Based Architecture** - Modular, reusable UI components following Angular best practices
- **Reactive Programming** - RxJS Observables for efficient asynchronous data handling
- **Modular Routing** - Scalable routing structure with lazy loading support
- **SCSS Preprocessing** - Advanced styling with variables, mixins, and nested selectors
- **Responsive Design** - Mobile-first approach with CSS media queries for all device sizes

### Code Quality & Standards
- **TypeScript Strict Mode** - Enhanced type safety and compile-time error detection
- **TSLint + Codelyzer** - Comprehensive linting with Angular-specific rules
- **Consistent Code Style** - EditorConfig for uniform formatting across development environments
- **AOT Compilation** - Ahead-of-Time compilation for faster rendering and early error detection

### Testing Infrastructure
- **Unit Testing** - Jasmine test framework with Karma runner
- **E2E Testing** - Protractor for end-to-end integration tests
- **Code Coverage** - Istanbul coverage reports with HTML and LCOV output
- **Page Object Model** - Structured E2E tests with reusable page objects

### Production Optimization
- **Tree Shaking** - Automatic removal of unused code
- **Code Splitting** - Optimized bundle loading with lazy routes
- **Build Optimizer** - Advanced optimizations for production builds
- **Bundle Analysis** - Size budgets to prevent performance degradation

---

## Technology Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Framework** | Angular 10 | Core application framework |
| **Language** | TypeScript 3.9 | Type-safe JavaScript superset |
| **Reactive** | RxJS 6.5 | Reactive programming & async operations |
| **Styling** | SCSS | CSS preprocessing with advanced features |
| **Unit Tests** | Jasmine + Karma | Component and service testing |
| **E2E Tests** | Protractor | Browser automation testing |
| **Linting** | TSLint + Codelyzer | Code quality enforcement |
| **Build** | Angular CLI | Development and build tooling |

---

## Project Structure

```
e-workshop/
├── src/
│   ├── app/
│   │   ├── app.module.ts           # Root application module
│   │   ├── app.component.ts        # Root component with logic
│   │   ├── app.component.scss      # Component-scoped styles
│   │   ├── app.component.html      # Component template
│   │   ├── app.component.spec.ts   # Unit tests
│   │   └── app-routing.module.ts   # Routing configuration
│   ├── assets/                     # Static assets (images, fonts)
│   ├── environments/               # Environment-specific configs
│   │   ├── environment.ts          # Development settings
│   │   └── environment.prod.ts     # Production settings
│   ├── styles.scss                 # Global application styles
│   └── index.html                  # Application entry point
├── e2e/                            # End-to-end test suite
│   └── src/
│       ├── app.e2e-spec.ts         # E2E test specifications
│       └── app.po.ts               # Page Object definitions
├── angular.json                    # Angular CLI configuration
├── karma.conf.js                   # Test runner configuration
├── tsconfig.json                   # TypeScript compiler options
└── tslint.json                     # Linting rules
```

---

## Getting Started

### Prerequisites

- **Node.js** (v12.x or higher)
- **npm** (v6.x or higher)
- **Angular CLI** (v10.x)

### Installation

```bash
# Clone the repository
git clone https://github.com/jlaran/angular-project.git

# Navigate to project directory
cd angular-project/e-workshop

# Install dependencies
npm install
```

### Development Server

```bash
# Start development server
npm start

# Application runs at http://localhost:4200
# Auto-reloads on file changes
```

### Build

```bash
# Development build
npm run build

# Production build (optimized)
ng build --prod
```

### Testing

```bash
# Run unit tests
npm test

# Run unit tests with coverage report
ng test --code-coverage

# Run end-to-end tests
npm run e2e
```

### Code Quality

```bash
# Run linting
npm run lint
```

---

## Build Configuration

The project includes optimized build configurations for both development and production environments:

### Production Build Features
- **Bundle Optimization** - Minification, tree shaking, and dead code elimination
- **File Hashing** - Cache-busting for all assets
- **CSS Extraction** - Separate CSS bundles for optimal caching
- **Vendor Chunking** - Separate vendor bundle for better caching
- **Source Map Exclusion** - No source maps in production for security

### Bundle Size Budgets
| Bundle Type | Warning | Error |
|-------------|---------|-------|
| Initial Bundle | 2 MB | 5 MB |
| Component Styles | 6 KB | 10 KB |

---

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest |
| Firefox | Latest |
| Edge | Latest 2 major versions |
| Safari | Latest 2 major versions |
| iOS Safari | Latest 2 major versions |

---

## Development Skills Demonstrated

This project showcases proficiency in:

- **Frontend Development** - Modern SPA architecture with Angular
- **TypeScript** - Strong typing, interfaces, and advanced ES6+ features
- **Reactive Programming** - Observable patterns with RxJS
- **CSS/SCSS** - Responsive layouts, component styling, CSS animations
- **Testing** - Unit testing, E2E testing, and TDD practices
- **Build Tools** - Webpack (via Angular CLI), npm scripts
- **Code Quality** - Linting, formatting, and consistent coding standards
- **Git Workflow** - Version control with feature branching

---

## Future Roadmap

- [ ] Implement NgRx state management
- [ ] Add Angular Material UI components
- [ ] Create reusable component library
- [ ] Implement user authentication with JWT
- [ ] Add PWA capabilities with service workers
- [ ] Integrate REST API services
- [ ] Add internationalization (i18n) support
- [ ] Implement CI/CD pipeline

---

## Author

**Juan Carlos Lara**

[![GitHub](https://img.shields.io/badge/GitHub-jlaran-181717?style=flat-square&logo=github)](https://github.com/jlaran)

---

## License

This project is open source and available under the [MIT License](LICENSE).
