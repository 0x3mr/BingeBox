# BingeBox - Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Architecture](#project-architecture)
4. [Folder Structure](#folder-structure)
5. [State Management](#state-management)
6. [Routing Configuration](#routing-configuration)
7. [Mock API Integration](#mock-api-integration)
8. [UI/UX Standards](#uiux-standards)
9. [Component Organization](#component-organization)
10. [Testing Strategy](#testing-strategy)
11. [Development Workflow](#development-workflow)
12. [Deployment Process](#deployment-process)
13. [Future Maintenance & Extensions](#future-maintenance--extensions)

---

## Project Overview

**BingeBox** is a modern streaming platform web application built with React, providing users with a Netflix-like experience for browsing movies and series. The application features user authentication, personalized profiles, subscription management, and comprehensive analytics dashboards.

### Key Features
- User authentication and authorization (user/admin roles)
- Browse movies and series with filtering and search
- Personalized user profiles with viewing statistics
- Continue watching functionality
- Watchlist management
- Interactive analytics dashboard with Chart.js
- Responsive design for all screen sizes
- Admin panel for user management

---

## Technology Stack

### Core Technologies
- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and development server
- **Tailwind CSS 4.1.17** - Utility-first CSS framework

### Routing & State Management
- **React Router DOM 7.9.6** - Client-side routing
- **Redux Toolkit 2.11.2** - State management
- **React Redux 9.2.0** - React bindings for Redux

### Additional Libraries
- **Framer Motion 11.11.17** - Animation library
- **Chart.js 4.5.1** - Data visualization
- **React Chart.js 2 5.3.1** - React wrapper for Chart.js
- **JSON Server 1.0.0-beta.3** - Mock REST API

### Development Tools
- **Vitest 4.0.15** - Unit testing framework
- **Testing Library** - Component testing utilities
- **ESLint** - Code linting

---

## Project Architecture

BingeBox follows a component-based architecture with clear separation of concerns:

```
┌─────────────────────────────────────┐
│           Presentation Layer        │
│  (React Components + Tailwind CSS)  │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│         State Management Layer      │
│    (Redux Toolkit + Redux Slices)   │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│          Routing Layer              │
│      (React Router DOM + Guards)    │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│           Data Layer                │
│      (JSON Server Mock API)         │
└─────────────────────────────────────┘
```

### Architecture Principles
1. **Component-Based Design** - Reusable, modular components
2. **Unidirectional Data Flow** - Redux manages application state
3. **Route Protection** - Authentication guards for protected routes
4. **Lazy Loading** - Code splitting for optimal performance
5. **Separation of Concerns** - Clear boundaries between UI, logic, and data

---

## Folder Structure

```
bingebox/
├── public/                        # Static assets
│   └── assets/
│       └── home/                  # Image assets
├── server/
│   └── database.json              # Mock database
├── src/
│   ├── api/                       # API configuration
│   │   └── index.js               # API_URL and utilities
│   ├── components/                # React components
│   │   ├── Home/                  # Home page components
│   │   │   ├── HeroSection.jsx
│   │   │   ├── TrendingSection.jsx
│   │   │   ├── TopSearchesSection.jsx
│   │   │   ├── ContinueWatchingSection.jsx
│   │   │   └── CategoriesSection.jsx
│   │   ├── Navigation/            # Navigation components
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── Overview/              # Overview page components
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ContentFilters.jsx
│   │   │   ├── Carousel.jsx
│   │   │   ├── RegionGrid.jsx
│   │   │   └── GenreGrid.jsx
│   │   ├── MovieDetail/           # Movie detail components
│   │   │   ├── MovieHero.jsx
│   │   │   ├── MovieDescription.jsx
│   │   │   ├── MovieCast.jsx
│   │   │   ├── MovieReviews.jsx
│   │   │   └── MovieSidebar.jsx
│   │   ├── Profile/               # Profile page components
│   │   │   ├── ProfileHeader.jsx
│   │   │   ├── ProfileStatsGrid.jsx
│   │   │   ├── ProfileChart.jsx
│   │   │   ├── GenreTrendsChart.jsx
│   │   │   ├── ContentDistributionChart.jsx
│   │   │   ├── GenrePreferencesChart.jsx
│   │   │   ├── WeeklyActivityChart.jsx
│   │   │   ├── TrendingStatsChart.jsx
│   │   │   └── ProfileNav.jsx
│   │   ├── Settings/              # Settings page components
│   │   │   ├── Sidebar.jsx
│   │   │   ├── ProfileInfo.jsx
│   │   │   ├── SecuritySettings.jsx
│   │   │   ├── BillingSettings.jsx
│   │   │   ├── NotificationsSettings.jsx
│   │   │   ├── StreamingPreferences.jsx
│   │   │   ├── ConnectedDevices.jsx
│   │   │   └── DangerZone.jsx
│   │   └── Shared/                # Shared components
│   │       └── CTA.jsx
│   ├── routes/                    # Route components (pages)
│   │   ├── Home.jsx
│   │   ├── Auth.jsx
│   │   ├── Overview.jsx
│   │   ├── MovieDetailPage.jsx
│   │   ├── SeriesDetailPage.jsx
│   │   ├── Profile.jsx
│   │   ├── Settings.jsx
│   │   ├── Subscription.jsx
│   │   ├── Support.jsx
│   │   ├── Admin.jsx
│   │   ├── NotFound.jsx
│   │   └── ProtectedRoutes.jsx    # Route guards
│   ├── store/                     # Redux store
│   │   ├── index.js               # Store configuration
│   │   └── slices/                # Redux slices
│   │       ├── authSlice.js
│   │       ├── profileSlice.js
│   │       ├── subscriptionSlice.js
│   │       └── userContentSlice.js
│   ├── App.jsx                    # Root component
│   ├── main.jsx                   # Entry point
│   └── App.test.jsx               # Integration tests
├── package.json
├── vite.config.js
├── tailwind.config.js
└── vitest.config.js
```

### Directory Conventions
- **components/** - Organized by feature/page, each component is self-contained
- **routes/** - Page-level components that correspond to routes
- **store/** - Centralized state management with Redux slices
- **api/** - API configuration and utility functions

---

## State Management

BingeBox uses **Redux Toolkit** for centralized state management with four primary slices:

### Store Configuration

```javascript
// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import profileReducer from './slices/profileSlice';
import subscriptionReducer from './slices/subscriptionSlice';
import userContentReducer from './slices/userContentSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    subscription: subscriptionReducer,
    userContent: userContentReducer,
  },
});
```

### Redux Slices

#### 1. Auth Slice (`authSlice.js`)
Manages user authentication state.

**State Shape:**
```javascript
{
  user: null | Object,
  token: null | string,
  isAuthenticated: boolean,
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: null | string
}
```

**Actions:**
- `loginStart()` - Set loading state
- `loginSuccess(payload)` - Store user and token
- `loginFailure(payload)` - Handle login error
- `logout()` - Clear auth state

#### 2. Profile Slice (`profileSlice.js`)
Manages user profile and preferences.

**State Shape:**
```javascript
{
  profile: null | Object,
  preferences: {
    language: string,
    theme: string,
    autoplayNext: boolean,
    defaultQuality: string
  }
}
```

**Actions:**
- `setProfile(payload)` - Set entire profile
- `updateProfile(payload)` - Partially update profile
- `setPreferences(payload)` - Update preferences
- `resetProfile()` - Clear profile state

#### 3. Subscription Slice (`subscriptionSlice.js`)
Manages subscription and billing information.

#### 4. User Content Slice (`userContentSlice.js`)
Manages user-specific content interactions.

**State Shape:**
```javascript
{
  watchlist: Array,
  continueWatching: Object,
  ratings: Object
}
```

**Actions:**
- `setWatchlist(payload)` - Set entire watchlist
- `addToWatchlist(payload)` - Add item to watchlist
- `removeFromWatchlist(payload)` - Remove item from watchlist
- `setContinueWatching(payload)` - Set continue watching data
- `updateProgress(payload)` - Update watch progress
- `setRating(payload)` - Set content rating
- `clearUserContent()` - Clear all user content

### State Management Best Practices
1. Use Redux Toolkit's `createSlice` for reduced boilerplate
2. Keep slice files focused and single-purpose
3. Use `useSelector` hook for accessing state
4. Use `useDispatch` hook for dispatching actions
5. Persist auth state to localStorage for session management
6. Keep UI state in component-level `useState` when appropriate

---

## Routing Configuration

BingeBox uses **React Router DOM v7** with lazy-loaded routes and route guards.

### Route Structure

```javascript
// src/App.jsx
<Router>
  <Routes>
    {/* Public Routes */}
    <Route index element={<Home />} />
    <Route path="/auth" element={<Auth />} />
    <Route path="/overview" element={<Overview />} />
    <Route path="/movie/:id" element={<MovieDetailPage />} />
    <Route path="/series/:id" element={<SeriesDetailPage />} />
    <Route path="/subscription" element={<Subscription />} />
    <Route path="/support" element={<Support />} />
    
    {/* Protected Routes */}
    <Route path="/profile" element={
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    } />
    <Route path="/settings" element={
      <ProtectedRoute>
        <Settings />
      </ProtectedRoute>
    } />
    
    {/* Admin Routes */}
    <Route path="/admin" element={
      <AdminRoute>
        <Admin />
      </AdminRoute>
    } />
    
    {/* Fallback */}
    <Route path="*" element={<NotFound />} />
  </Routes>
</Router>
```

### Route Guards

#### Protected Route
Redirects unauthenticated users to `/auth`.

```javascript
export function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }
  
  return children;
}
```

#### Admin Route
Redirects non-admin users to home page.

```javascript
export function AdminRoute({ children }) {
  const user = useSelector((state) => state.auth.user);
  
  if (!user || user.admin !== "yes") {
    return <Navigate to="/" replace />;
  }
  
  return children;
}
```

### Route Features
- **Conditional Header Rendering** - Header hidden on `/auth` route
- **Dynamic Route Parameters** - Movie/series detail pages use `:id`
- **Fallback Routes** - Multiple paths for same component (backward compatibility)
- **404 Handling** - Catch-all route for undefined paths

---

## Mock API Integration

BingeBox uses **JSON Server** to simulate a REST API during development.

### API Configuration

```javascript
// src/api/index.js
export const API_URL = 'http://localhost:4000';

export const assetUrl = (path) => {
  if (!path) return '';
  return path.startsWith('http') ? path : `${API_URL}${path}`;
};
```

### Database Structure (`server/database.json`)

```json
{
  "movies": [...],
  "series": [...],
  "trending": [...],
  "topSearches": [...],
  "continueWatching": [...],
  "hero": {...},
  "categories": [...],
  "users": [...],
  "charts": [...]
}
```

### API Endpoints

#### GET Requests
- `GET /movies` - Fetch all movies
- `GET /movies/:id` - Fetch movie by ID
- `GET /series` - Fetch all series
- `GET /series/:id` - Fetch series by ID
- `GET /users` - Fetch all users
- `GET /users/:id` - Fetch user by ID
- `GET /trending` - Fetch trending content
- `GET /topSearches` - Fetch top searches
- `GET /continueWatching` - Fetch continue watching
- `GET /charts` - Fetch chart data

#### POST Requests
- `POST /users` - Create new user

#### PUT/PATCH Requests
- `PUT /users/:id` - Update user (full)
- `PATCH /users/:id` - Update user (partial)

#### DELETE Requests
- `DELETE /users/:id` - Delete user

### Making API Calls

```javascript
// Example: Fetch movies
const fetchMovies = async () => {
  try {
    const res = await fetch(`${API_URL}/movies`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

// Example: Create user
const createUser = async (userData) => {
  try {
    const res = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Example: Delete user
const deleteUser = async (id) => {
  try {
    const res = await fetch(`${API_URL}/users/${id}`, {
      method: 'DELETE'
    });
    if (!res.ok) throw new Error('Delete failed');
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};
```

### Running the Mock API

```bash
npm run backend
# Runs on http://localhost:4000
```

### CRUD Operation Patterns

1. **Always handle errors** with try-catch blocks
2. **Check response status** before processing data
3. **Provide user feedback** for async operations
4. **Update local state** after successful operations
5. **Use loading states** for better UX

---

## UI/UX Standards

### Design System

#### Color Palette
```javascript
// Tailwind Custom Colors (Dark Theme Default)
{
  absolutewhite: '#FFFFFF',
  black: {
    06: '#0F0F0F',
    08: '#141414',
    10: '#1A1A1A',
    12: '#1F1F1F',
    15: '#262626',
  },
  grey: {
    60: '#999999',
    75: '#BFBFBF',
  },
  red: {
    45: '#E50000',
  },
  white: {
    60: '#999999',
  },
  dark: '#141414',
  card: '#0F0F0F',
  card2: '#1A1A1A',
  borderc: '#262626',
  accent: '#E50000',
  textgray: '#999999',
  brand: {
    primary: '#4fc3f7',
    secondary: '#3a506b',
    background: '#0b132b',
    surface: '#17213c',
    border: '#334155',
  },
  neutral: {
    dark: '#0f0f0f',
  }
}

// Light Theme Overrides (when .light class is applied)
{
  neutral: {
    dark: '#f9fafb',
  },
  absolutewhite: '#0f172a',
  brand: {
    background: '#f3f4f6',
    surface: '#ffffff',
    border: '#e5e7eb',
  },
  textgray: '#4b5563',
  grey: {
    60: '#4b5563',
  }
}
```

#### Typography
- **Font Family:** Inter (sans-serif)
- **Headings:** Bold weights (700-900)
- **Body Text:** Regular weight (400)
- **Special Text:** Medium weight (500-600)

#### Spacing Scale
BingeBox follows Tailwind's default spacing scale (4px base unit).

### Responsive Design

#### Breakpoints
```javascript
{
  sm: '640px',   // Small devices
  md: '768px',   // Medium devices
  lg: '1024px',  // Large devices
  xl: '1280px',  // Extra large devices
  '2xl': '1536px' // 2X large devices
}
```

#### Mobile-First Approach
All components are designed mobile-first with progressive enhancement:
```jsx
<div className="px-4 md:px-8 lg:px-12">
  {/* Padding increases with screen size */}
</div>
```

### Accessibility Standards

1. **Semantic HTML** - Use proper HTML5 elements
2. **ARIA Labels** - Add labels for screen readers
3. **Keyboard Navigation** - All interactive elements accessible via keyboard
4. **Focus States** - Visible focus indicators
5. **Color Contrast** - WCAG AA compliant contrast ratios
6. **Alt Text** - Descriptive alt text for images

```jsx
// Example: Accessible button
<button
  aria-label="Add to watchlist"
  className="focus:ring-2 focus:ring-blue-500"
>
  <svg aria-hidden="true">...</svg>
</button>
```

### Component Design Patterns

#### Card Components
```jsx
<div className="bg-brand-surface rounded-xl p-6 border border-white/10">
  {/* Card content */}
</div>
```

#### Buttons
```jsx
<button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 
                   text-white rounded-xl transition-colors">
  Action
</button>
```

#### Input Fields
```jsx
<input
  className="w-full px-4 py-3 bg-white/5 border border-white/10 
             rounded-xl text-white placeholder:text-gray-500
             focus:outline-none focus:border-blue-500"
/>
```

### Animation Standards

Uses **Framer Motion** for animations:
- **Page Transitions** - Fade in/out
- **Card Hover** - Scale transform
- **List Items** - Stagger animation
- **Modal Overlays** - Backdrop blur

```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  {/* Animated content */}
</motion.div>
```

### Performance Considerations

1. **Image Optimization** - Use WebP format when possible
2. **Lazy Loading** - Implement intersection observer for images
3. **Code Splitting** - Lazy load routes and heavy components
4. **Memoization** - Use React.memo for expensive components
5. **Virtual Scrolling** - For long lists (consider react-window)

---

## Component Organization

### Component Structure Template

```jsx
// 1. Imports
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// 2. Component Definition
function ComponentName({ prop1, prop2 }) {
  // 3. Hooks
  const dispatch = useDispatch();
  const stateValue = useSelector(state => state.slice.value);
  const [localState, setLocalState] = useState(null);
  
  // 4. Side Effects
  useEffect(() => {
    // Effect logic
  }, [dependencies]);
  
  // 5. Event Handlers
  const handleAction = () => {
    // Handler logic
  };
  
  // 6. Render Logic
  if (loading) return <Loader />;
  if (error) return <Error message={error} />;
  
  // 7. JSX Return
  return (
    <div className="container">
      {/* Component content */}
    </div>
  );
}

// 8. PropTypes
ComponentName.propTypes = {
  prop1: PropTypes.string.required,
  prop2: PropTypes.number,
};

// 9. Default Props
ComponentName.defaultProps = {
  prop2: 0,
};

// 10. Export
export default ComponentName;
```

### Component Categories

#### 1. Page Components (`routes/`)
Top-level route components that compose the page layout.

**Responsibilities:**
- Fetch data
- Compose child components
- Handle page-level state

#### 2. Feature Components (`components/[Feature]/`)
Feature-specific components grouped by functionality.

**Example:** `components/Profile/`
- ProfileHeader.jsx
- ProfileStatsGrid.jsx
- ProfileChart.jsx

#### 3. Shared Components (`components/Shared/`)
Reusable components used across features.

**Examples:**
- CTA.jsx
- Modal.jsx
- Button.jsx

#### 4. Layout Components (`components/Navigation/`)
Navigation and layout components.

**Examples:**
- Header.jsx
- Footer.jsx
- Sidebar.jsx

### Component Best Practices

1. **Single Responsibility** - Each component has one clear purpose
2. **Prop Validation** - Use PropTypes for type checking
3. **Default Props** - Provide sensible defaults
4. **Composition Over Inheritance** - Prefer composition patterns
5. **Keep Components Small** - Aim for <200 lines
6. **Extract Logic** - Move complex logic to custom hooks
7. **Avoid Prop Drilling** - Use context or Redux for deep data
8. **Use Fragments** - Avoid unnecessary wrapper divs
9. **Handle Loading States** - Show feedback during async operations
10. **Error Boundaries** - Implement error boundaries for stability

---

## Testing Strategy

BingeBox uses **Vitest** and **React Testing Library** for testing.

### Test File Organization

```
src/
├── App.test.jsx              # Integration tests
└── components/
    └── Component/
        ├── Component.jsx
        └── Component.test.jsx
```

### Test Configuration

```javascript
// vitest.config.js
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});
```

### Test Example

```javascript
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import { store } from './store';

describe('App routing integration tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const renderRoute = (route) => {
    return render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          <AppRoutes />
        </MemoryRouter>
      </Provider>
    );
  };

  it('renders Home page on /', () => {
    renderRoute('/');
    expect(document.querySelector('header')).toBeInTheDocument();
  });

  it('redirects unauthenticated user from /profile to /auth', () => {
    renderRoute('/profile');
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
```

### Testing Levels

#### 1. Unit Tests
Test individual components in isolation.

```javascript
describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });
  
  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
```

#### 2. Integration Tests
Test component interactions and routing.

```javascript
describe('Auth Flow', () => {
  it('logs in user and redirects to profile', async () => {
    const { user } = renderWithProviders(<App />);
    
    await user.type(screen.getByLabelText('Email'), 'test@example.com');
    await user.type(screen.getByLabelText('Password'), 'password123');
    await user.click(screen.getByRole('button', { name: /login/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/profile/i)).toBeInTheDocument();
    });
  });
});
```

#### 3. E2E Tests (Future Enhancement)
Consider adding Playwright or Cypress for end-to-end testing.

### Testing Best Practices

1. **Test User Behavior** - Not implementation details
2. **Use Semantic Queries** - Prefer getByRole, getByLabelText
3. **Mock External Dependencies** - Mock API calls
4. **Test Edge Cases** - Empty states, errors, loading
5. **Keep Tests Isolated** - Each test should run independently
6. **Descriptive Test Names** - Clear what is being tested
7. **Avoid Testing Library Details** - Focus on user experience

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

---

## Development Workflow

### Getting Started

#### 1. Clone Repository
```bash
git clone https://github.com/0x3mr/BingeBox.git
cd BingeBox
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Start Development Servers
```bash
# Terminal 1: Start Vite dev server
npm run dev

# Terminal 2: Start JSON server
npm run backend
```

#### 4. Access Application
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:4000

### Development Scripts

```json
{
  "dev": "vite",                           // Start dev server
  "backend": "json-server --watch server/database.json --port 4000",
  "build": "vite build",                   // Production build
  "preview": "vite preview",               // Preview production build
  "lint": "eslint .",                      // Lint code
  "test": "vitest"                         // Run tests
}
```

### Code Style & Linting

#### ESLint Configuration
The project uses ESLint for code quality:

```bash
# Lint all files
npm run lint

# Auto-fix issues
npm run lint -- --fix
```

#### Formatting Conventions
- **Indentation:** 2 spaces
- **Quotes:** Single quotes for JS, double for JSX attributes
- **Semicolons:** Required
- **Line Length:** Max 80-100 characters (soft limit)
- **Component Names:** PascalCase
- **File Names:** PascalCase for components, camelCase for utilities

### Commit Conventions

Follow conventional commits format:
```
feat: add user profile analytics dashboard
fix: resolve authentication redirect issue
refactor: simplify movie detail component
docs: update API documentation
style: format code with prettier
test: add unit tests for auth slice
```

### Component Development Checklist

- [ ] Create component file with proper naming
- [ ] Add PropTypes validation
- [ ] Implement responsive design (mobile-first)
- [ ] Add accessibility attributes
- [ ] Handle loading and error states
- [ ] Write unit tests
- [ ] Test on multiple screen sizes
- [ ] Verify keyboard navigation
- [ ] Check color contrast ratios
- [ ] Add JSDoc comments for complex logic

---

## Deployment Process

### Build Process

#### 1. Create Production Build
```bash
npm run build
```

This generates optimized files in the `dist/` directory:
```
dist/
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other-assets]
└── index.html
```

#### 2. Preview Production Build
```bash
npm run preview
```

### Deployment Platforms

BingeBox has been successfully deployed on the following platforms:

#### Render

The application is deployed on Render with the following configuration:

1. **Connect Repository** - Link your GitHub repository
2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Environment Variables** - Set production API URLs

#### GitHub Pages

The application is also available on GitHub Pages:

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Add Scripts** (package.json)
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Deploy**
```bash
npm run deploy
```

4. **Configure Base Path** (vite.config.js)
```javascript
export default defineConfig({
  base: '/BingeBox/',
  // ... other config
});
```

### Environment Variables

Create `.env` files for different environments:

```bash
# .env.development
VITE_API_URL=http://localhost:4000

# .env.production
VITE_API_URL=https://api.bingebox.com
```

Access in code:
```javascript
const API_URL = import.meta.env.VITE_API_URL;
```

### Pre-Deployment Checklist

- [ ] Run production build locally
- [ ] Test production build with `npm run preview`
- [ ] Run all tests (`npm test`)
- [ ] Check for console errors/warnings
- [ ] Verify all routes work correctly
- [ ] Test on mobile devices
- [ ] Check image loading
- [ ] Verify API endpoints (update from localhost)
- [ ] Update environment variables
- [ ] Check SEO meta tags
- [ ] Test authentication flow
- [ ] Verify admin panel access
- [ ] Check 404 page

### Post-Deployment

1. **Monitor Performance** - Use Lighthouse for audits
2. **Set up Error Tracking** - Consider Sentry integration
3. **Monitor Analytics** - Integrate Google Analytics
4. **Set up CI/CD** - Automate deploy