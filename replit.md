# Overview

This is a full-stack React application built with Express.js backend, featuring a modern tech stack with TypeScript, Tailwind CSS, and shadcn/ui components. The application appears to be a landing page for "Exoraz," an automation and workflow management platform. It includes comprehensive UI components, responsive design, and a PostgreSQL database setup using Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built using React with TypeScript and follows a modern component-based architecture:

- **Component Library**: Uses shadcn/ui components with Radix UI primitives for consistent, accessible UI elements
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Routing**: Wouter library for client-side routing with a simple switch-based route structure
- **State Management**: TanStack Query (React Query) for server state management and API data fetching
- **Build System**: Vite for fast development and optimized production builds
- **UI Structure**: Organized into layout components (header, footer) and section-based page components

The application uses a monorepo structure with shared TypeScript types and schemas between frontend and backend.

## Backend Architecture
The server is built with Express.js and follows a minimal REST API pattern:

- **Framework**: Express.js with TypeScript for type safety
- **Development Setup**: Custom Vite integration for hot module reloading during development
- **Storage Layer**: Abstracted storage interface with both in-memory and database implementations
- **Route Organization**: Centralized route registration system with API prefix structure
- **Middleware**: Custom logging middleware for API request tracking

The backend uses a clean architecture approach with separated concerns for routing, storage, and business logic.

## Database Design
PostgreSQL database with Drizzle ORM for type-safe database operations:

- **ORM**: Drizzle ORM with PostgreSQL dialect for schema management and queries
- **Schema Structure**: User-based authentication schema with username/password fields
- **Migration System**: Drizzle Kit for database schema migrations and version control
- **Type Safety**: Generated TypeScript types from database schema using Drizzle Zod integration

The database connection uses Neon Database serverless PostgreSQL with connection pooling.

## Development Workflow
The project supports both development and production environments:

- **Development**: Hot reloading with Vite middleware integration
- **Production**: Optimized builds with separate client/server bundling
- **Type Checking**: Comprehensive TypeScript configuration covering client, server, and shared code
- **Asset Management**: Vite-based asset bundling with proper path resolution

## Authentication & Session Management
Basic user authentication system setup:

- **User Storage**: Username/password based user accounts
- **Session Handling**: PostgreSQL session store with connect-pg-simple
- **Storage Interface**: Abstracted user management with CRUD operations

The authentication system is designed to be extensible with additional features like JWT tokens or OAuth integration.

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection for cloud deployment
- **drizzle-orm**: Type-safe ORM for PostgreSQL database operations
- **express**: Node.js web application framework for API server
- **react**: Frontend UI library with hooks-based component architecture
- **@tanstack/react-query**: Server state management and data fetching library

## UI and Styling
- **@radix-ui/***: Comprehensive collection of accessible UI primitives (dialogs, dropdowns, forms, etc.)
- **tailwindcss**: Utility-first CSS framework for responsive design
- **class-variance-authority**: Type-safe variant-based component styling
- **lucide-react**: Icon library with React components

## Development and Build Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking for JavaScript
- **drizzle-kit**: Database migration and schema management tool
- **wouter**: Lightweight client-side routing library
- **@replit/vite-plugin-***: Replit-specific development plugins for enhanced development experience

## Form Handling and Validation
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for form validation schemas
- **zod**: TypeScript-first schema validation library

The application is designed to be cloud-native with serverless database integration and optimized for deployment on platforms like Replit.