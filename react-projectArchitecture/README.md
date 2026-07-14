# React Architecture Guide (Medium Level)

## Overview

A good React architecture helps keep applications **scalable, maintainable, reusable, and easy to test**. Instead of placing everything in a few large components, React applications should separate concerns such as UI, business logic, state management, and API communication.

---

# Core Principles

## 1. Component-Based Design

Break the UI into small, reusable components.

### Good Example

```
App
 ├── Header
 ├── Sidebar
 ├── Dashboard
 │    ├── UserCard
 │    ├── Statistics
 │    └── ActivityList
 └── Footer
```

### Benefits

- Reusability
- Easier maintenance
- Better testing
- Cleaner code

---

## 2. Folder Structure

A common scalable folder structure:

```text
src/
│
├── assets/
├── components/
│   ├── Button/
│   ├── Card/
│   └── Modal/
│
├── pages/
│   ├── Home/
│   ├── Dashboard/
│   └── Profile/
│
├── hooks/
│
├── services/
│
├── context/
│
├── utils/
│
├── constants/
│
├── layouts/
│
├── routes/
│
├── styles/
│
└── App.jsx
```

### Purpose

| Folder | Responsibility |
|---------|----------------|
| components | Reusable UI |
| pages | Route-level screens |
| hooks | Custom React hooks |
| services | API calls |
| utils | Helper functions |
| context | Global state |
| layouts | Shared page layouts |
| routes | Routing configuration |

---

# Component Architecture

## Presentational Components

Responsible only for displaying UI.

Example:

```jsx
function UserCard({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
    </div>
  );
}
```

Characteristics:

- Receives props
- No API calls
- Minimal logic

---

## Container Components

Responsible for:

- Fetching data
- Managing state
- Passing props to UI components

Example:

```jsx
function UserContainer() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser().then(setUser);
  }, []);

  return <UserCard user={user} />;
}
```

---

# State Management

## Local State

Use when state belongs to a single component.

```jsx
const [count, setCount] = useState(0);
```

Use for:

- Forms
- Toggle buttons
- Modal visibility

---

## Shared State

Use Context API when multiple components need the same data.

Example:

```
ThemeContext
      │
 ├────┴────┐
Navbar   Sidebar
      │
   Dashboard
```

Suitable for:

- Authentication
- Theme
- Language
- User settings

---

## Global State

For larger applications, libraries such as Redux Toolkit or Zustand can help manage complex shared state.

Use global state only when necessary to avoid unnecessary complexity.

---

# Custom Hooks

Move reusable logic into custom hooks.

Example:

```jsx
function useFetch(url) {
  // fetching logic
}
```

Benefits:

- Reuse logic
- Cleaner components
- Better separation of concerns

---

# API Layer

Avoid making API requests directly inside many components.

Instead:

```text
services/
    api.js
    userService.js
    productService.js
```

Example:

```jsx
// userService.js

export const getUsers = () => {
    return fetch("/api/users");
};
```

Components should call the service instead of directly using `fetch()` everywhere.

---

# Routing

Keep routes in one place.

Example:

```jsx
<Route path="/" element={<Home />} />
<Route path="/profile" element={<Profile />} />
<Route path="/dashboard" element={<Dashboard />} />
```

Benefits:

- Easier navigation management
- Cleaner application entry point

---

# Separation of Concerns

Keep responsibilities separate.

Example:

```text
Component
      ↓
Custom Hook
      ↓
Service
      ↓
API
```

Each layer has a single responsibility.

---

# Performance Practices

Some common optimization techniques include:

- Lazy loading pages
- Memoizing expensive computations with `useMemo`
- Preventing unnecessary re-renders with `React.memo`
- Memoizing callback functions with `useCallback`
- Splitting large bundles using dynamic imports

Example:

```jsx
const Dashboard = React.lazy(() => import("./Dashboard"));
```

---

# Naming Conventions

Use descriptive names.

Good examples:

```text
UserCard.jsx
ProductList.jsx
useAuth.js
userService.js
DashboardLayout.jsx
```

Avoid:

```text
test.jsx
abc.js
newComponent.jsx
```

---

# Data Flow

React follows a one-way data flow.

```text
Parent
   │
   ▼
 Child
   │
   ▼
 GrandChild
```

Data flows downward through props, while child components communicate upward using callback functions.

---

# Example Architecture

```text
User clicks button
        │
        ▼
Component
        │
        ▼
Custom Hook
        │
        ▼
Service
        │
        ▼
API
        │
        ▼
Response
        │
        ▼
Update State
        │
        ▼
UI Re-renders
```

---

# Best Practices

- Keep components small and focused.
- Reuse components whenever possible.
- Avoid duplicated logic.
- Store reusable logic in custom hooks.
- Keep API logic separate from UI.
- Organize files consistently.
- Prefer composition over inheritance.
- Write components with a single responsibility.
- Use meaningful names for files, variables, and functions.
- Add tests for critical business logic.

---

# Summary

A well-structured React application generally consists of:

- Reusable UI components
- Route-level pages
- Custom hooks for shared logic
- A dedicated API/service layer
- Appropriate state management (local, shared, or global)
- Clear folder organization
- Unidirectional data flow
- Performance optimizations where needed

This architecture improves readability, scalability, maintainability, and collaboration as an application grows.

---

# References

1. React Documentation – https://react.dev/learn
2. React Documentation: Thinking in React – https://react.dev/learn/thinking-in-react
3. React Documentation: Sharing State Between Components – https://react.dev/learn/sharing-state-between-components
4. React Documentation: Reusing Logic with Custom Hooks – https://react.dev/learn/reusing-logic-with-custom-hooks
5. React Documentation: Conditional Rendering – https://react.dev/learn/conditional-rendering
6. React Documentation: Rendering Lists – https://react.dev/learn/rendering-lists
7. Redux Toolkit Documentation – https://redux-toolkit.js.org/
8. React Router Documentation – https://reactrouter.com/
9. Kent C. Dodds – Application State Management – https://kentcdodds.com/blog/application-state-management-with-react
10. React Style Guide – https://reactstyleguide.com/