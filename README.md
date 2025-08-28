# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 🔔 Syncfusion notification system
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Notification System

This application includes a comprehensive notification system built with Syncfusion components that displays notifications from the top of the screen when users sign in successfully.

### Features

- **Success Notifications**: Automatically displayed when users sign in with Google or as a guest
- **Multiple Types**: Support for success, error, warning, and info notifications
- **Auto-dismiss**: Notifications automatically disappear after 5 seconds
- **Manual Close**: Users can manually close notifications
- **Progress Bar**: Visual indicator showing when the notification will auto-dismiss
- **Responsive Design**: Notifications are styled to match the application's design system

### Usage

The notification system is automatically integrated into the authentication flow:

1. **Google Sign-in**: When users sign in with Google, a success notification appears after the OAuth redirect
2. **Guest Sign-in**: When users sign in as a guest, a success notification appears immediately
3. **Sign-out**: When users sign out, a success notification appears before redirecting to the sign-in page
4. **Custom Notifications**: You can trigger custom notifications using the `useNotification` hook:

```typescript
import { useNotification } from '~/lib/notification-context';

const MyComponent = () => {
  const { showNotification } = useNotification();
  
  const handleSuccess = () => {
    showNotification('Operation completed successfully!', 'success');
  };
  
  const handleError = () => {
    showNotification('Something went wrong!', 'error');
  };
  
  const handleLogout = async () => {
    try {
      await logoutUser();
      showNotification('Successfully signed out!', 'success');
      navigate('/sign-in');
    } catch (error) {
      showNotification('Error signing out. Please try again.', 'error');
    }
  };
};
```

### Components

- **NotificationBar**: The main notification component using Syncfusion Toast
- **NotificationProvider**: Context provider for managing notification state
- **useAuthNotification**: Hook for detecting OAuth sign-ins and showing notifications

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
