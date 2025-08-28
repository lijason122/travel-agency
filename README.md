# Admin Dashboard – AI Trip Planner

An admin dashboard for managing AI-generated travel itineraries, users, and growth metrics. Built with a modern React stack for performance, scalability, and great developer experience.

## Description

This project provides a full-featured admin interface to create, manage, and analyze AI-generated trip itineraries. It includes secure authentication, interactive analytics, and a responsive UI optimized for both desktop and mobile.

### Key Features

- ✅ AI-Driven Trip Itinerary Generator – Create personalized trip plans based on country, travel style, interests, group type, and budget.
- ✅ Secure User Authentication – Smooth login with OAuth for enhanced security.
- ✅ Admin Dashboard – Comprehensive management of trips, users, and growth metrics.
- ✅ Advanced Analytics – Interactive charts and real-time trip statistics.
- ✅ Responsive, Modern UI – Built with Tailwind CSS for a sleek, mobile-friendly experience.
- ✅ Scalable Architecture – Modular, reusable components for efficient development.
- ✅ Robust API Integration – Efficient data management with Appwrite.

### Tech Stack

- ⚙️ React Router v7 for intuitive navigation
- ⚙️ Appwrite for database and API management
- ⚙️ Syncfusion for interactive data visualization
- ⚙️ Tailwind CSS for responsive styling
- ⚙️ Vite for fast builds and optimized performance
- ⚙️ React 19 for robust front-end development

## Why?

Planning trips can be time-consuming, and managing user-generated itineraries at scale is challenging. This dashboard streamlines itinerary creation using AI, provides clear oversight for admins, and surfaces actionable insights with real-time analytics—reducing operational overhead while improving user experience.

## Quick Start

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install

```bash
npm install
```

### Develop

```bash
npm run dev
```

App runs at `http://localhost:5173` with Hot Module Replacement.

### Build

```bash
npm run build
```

### Optional: Docker

```bash
docker build -t admin-dashboard .
docker run -p 3000:3000 admin-dashboard
```

## Usage

- Authentication: OAuth sign-in provides a smooth, secure login experience.
- Trips: Create and manage AI-generated itineraries from the admin panel.
- Analytics: Explore interactive charts and growth metrics.
- Notifications: Integrated toast notifications for key user actions.

Trigger a custom notification using the `useNotification` hook:

```typescript
import { useNotification } from '~/lib/notification-context';

export function MyComponent() {
  const { showNotification } = useNotification();
  const onSuccess = () => showNotification('Operation completed successfully!', 'success');
  const onError = () => showNotification('Something went wrong!', 'error');
  return null;
}
```

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit changes: `git commit -m "feat: add your feature"`
4. Push to branch: `git push origin feat/your-feature`
5. Open a Pull Request

Please follow conventional commits and ensure the app builds before submitting.
