# PIJAR Frontend Project

Welcome to the **PIJAR Frontend Project**! This application is designed to provide an interactive and seamless interface for users to explore and book mentorship programs. With a clean UI, responsive design, and rich feature set, PIJAR connects learners with mentors globally. This README will guide you through the project setup, structure, and key functionalities.

Visit the website here: [revou-pijar.vercel.app](https://revou-pijar.vercel.app/)

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Problem Statement](#problem-statement)
3. [Solution](#solution)
4. [Value Proposition](#value-proposition)
5. [Features](#features)
6. [Recent Updates](#recent-updates)
7. [Tech Stack](#tech-stack)
8. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Development Server](#running-the-development-server)
9. [Project Structure](#project-structure)
10. [API Integration](#api-integration)
11. [Styling and Theming](#styling-and-theming)
12. [Contributors](#contributors)

---

## Project Overview
**PIJAR** is a platform that bridges the gap between mentors and mentees by offering a space for:
- Mentors to showcase their expertise and availability.
- Mentees to search for mentors based on their interests and schedule sessions easily.

The frontend is built with modern tools to ensure a dynamic, efficient, and user-friendly experience.

---

## Problem Statement

Access to quality mentorship and learning resources is limited, particularly for underserved communities. Many learners struggle to find reliable, tailored guidance to improve their skills or achieve their personal and professional goals.

---

## Solution

PIJAR bridges the gap between learners and mentors by providing a user-friendly platform where:

- Learners can search for mentors by skills, topics, or availability.
- Mentors can share their expertise, schedules, and resources with learners.
- The platform ensures accessibility, inclusivity, and engagement.

---

## Value Proposition

PIJAR provides:

- **Accessibility**: A lightweight, responsive platform that works on low-bandwidth connections.
- **Personalized Learning**: Connects learners to mentors who match their specific needs.
- **Scalability**: Designed to support growth and integration with other tools.
- **Empowerment**: Supports underserved communities by democratizing access to mentorship.

---

## Features
- **Mentor Profiles**: Comprehensive profiles with details on education, work experience, skills, and availability.
- **Search and Filter**: Search mentors by name, expertise, and schedule. Apply filters for targeted results.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Booking System**: Book mentorship sessions.
- **User Authentication**: Secure login and signup features with Google OAuth integration.
- **Certificate Offering**: Certificates provided after session completion.
- **Lesson Downloads**: Users can download session resources for offline learning.

---

## Recent Updates

### Deployment
- The application is now deployed on **Vercel**, ensuring fast and reliable performance with seamless CI/CD integration.

### Gmail OAuth Integration
- Added Gmail authentication using OAuth to simplify the signin/signup process and enhance security.
- This feature also includes email verification to ensure user authenticity.

### Bug Fixes and Improvements
- Optimized search API integration and resolved issues with search functionality.
- Improved category APIs and navigation functionality.
- Enhanced performance and reduced page load times for the homepage and main banner.
- Fixed card interactivity issues; all cards are now clickable.

## Security Enhancements with Cookie-Based Authentication

### Why Cookies Instead of JWT in LocalStorage?
Storing JWT tokens in cookies enhances security by:
- Preventing access via JavaScript (using HttpOnly).
- Enabling automatic inclusion in requests without manual headers.
- Providing better protection against XSS attacks.

### Backend Implementation
- Cookies are used to store authentication tokens with the following attributes:
  - **HttpOnly**: Prevents client-side scripts from accessing the token.
  - **Secure**: Ensures the cookie is sent only over HTTPS.
  - **SameSite**: Restricts cookie usage to prevent CSRF attacks.

### Frontend Updates
- All API calls now include cookies for authentication using:
  ```typescript
  credentials: 'include';

---

## Tech Stack
- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **Styling**: Tailwind CSS
- **API Communication**: Axios
- **Authentication**: Gmail OAuth
- **Type Checking**: TypeScript
- **Deployment**: Vercel

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or [Yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/anojumisa/pijar_frontend.git
   cd pijar-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server
1. Start the server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Project Structure
The project follows a modular folder structure for better scalability and maintainability:

```plaintext
src/
├── app/                # Next.js pages and API routes
├── components/         # Reusable UI components
├── hooks/              # Custom React hooks
├── styles/             # Global and component-specific styles
├── utils/              # Utility functions
├── public/             # Static assets
```

---

## API Integration
The frontend communicates with the backend via RESTful APIs. API calls are managed using Axios and encapsulated in utility functions for reusability.

### Example API Request
```typescript
import axios from 'axios';

const fetchMentors = async (keyword: string) => {
  try {
    const response = await axios.get(`/api/v1/search`, {
      params: { keyword },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching mentors:', error);
    throw error;
  }
};
```

Ensure your backend server is running for successful API integration.

---

## Styling and Theming
Styling is powered by **Tailwind CSS** for utility-first and responsive design.

### Customization
- Edit the `tailwind.config.js` file to modify theme colors, fonts, and other design tokens.
- Use `@apply` to create reusable class utilities.

---

## Contributors
1. Ano Jumisa - Project Lead and Fullstack Software Engineer
2. Frisqia Fatmalaningsih - Frontend Developer
3. Leonard Abimanyu - Frontend Developer
4. Ardyanto Hendrajaya - Frontend Developer
5. Frederick Alexander Badaruddin - Frontend Developer
6. Philip Nathaniel - Backend Developer
