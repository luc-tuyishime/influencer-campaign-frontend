## Influencer Campaign Platform Frontend

A modern web application built with Next.js 13+ (App Router) for managing influencer marketing campaigns. This platform connects influencers with brands and helps manage campaign submissions effectively.

### Live Demo

* Production URL: https://influencer-campaign-frontend-er9p0whwl-luc-tuyishimes-projects.vercel.app/

### Features

* JWT Authentication
* Responsive Design
* Campaign Management
* Performance Tracking
* Modern UI with Tailwind CSS
* Real-time State Management with Redux Toolkit
* TypeScript Support
*  Route Protection

### Tech Stack

* Framework: Next.js 13+ (App Router)
* State Management: Redux Toolkit & RTK Query
* Styling: Tailwind CSS
* UI Components: Headless UI
* Icons: Lucide Icons
* Authentication: JWT
* Form Handling: React Hook Form
* TypeScript for type safety

### Getting Started

Prerequisites

* Node.js 18+
* npm or yarn
* Backend API running (see Backend Repository)

### Installation

1. Clone the repository:

```
git clone https://github.com/luc-tuyishime/influencer-campaign-frontend.git
cd influencer-campaign-frontend
```

2. Install dependencies:

```
npm install
```

3. Create a `.env.local` file.

```
NEXT_PUBLIC_API_URL=http://localhost:3001/api

```

4. Start the development server:

```
npm run dev
```

### Project Structure

```
src/
├── app/                     # App router pages
│   ├── (auth)/             # Auth routes (public)
│   │   ├── login/
│   │   └── register/
│   ├── (protected)/        # Protected routes
│   │   └── campaigns/
│   └── layout.tsx
├── components/             # React components
│   ├── auth/              # Auth related components
│   ├── campaigns/         # Campaign related components
│   ├── shared/            # Shared/UI components
│   └── ui/               # Base UI components
├── lib/                   # Utilities & configurations
│   ├── redux/            # Redux store & slices
│   ├── types/            # TypeScript types
│   └── utils/            # Helper functions
└── styles/               # Global styles
```

### Authentication
The application uses JWT-based authentication:

* Tokens are stored in cookies
* Protected routes redirect to login
* Automatic token refresh
* Role-based access control

### UI Components
Key components include:

* Campaign Grid & Cards
* Authentication Forms
* Navigation Bar
* Loading States
* Error Boundaries
* Toast Notifications

### Responsive Design
The application is fully responsive and optimized for:

* Mobile devices
* Tablets
* Desktop browsers








