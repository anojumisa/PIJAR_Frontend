# PIJAR Frontend Project

Welcome to the **PIJAR Frontend Project**! This application is designed to provide an interactive and seamless interface for users to explore and book mentorship programs. With a clean UI, responsive design, and rich feature set, PIJAR connects learners with mentors globally. This README will guide you through the project setup, structure, and key functionalities.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Problem Statement](#problem-statement)
3. [Solution](#solution)
4. [Value Proposition](#value-proposition)
5. [Features](#features)
6. [Tech Stack](#tech-stack)
7. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Development Server](#running-the-development-server)
8. [Project Structure](#project-structure)
9. [API Integration](#api-integration)
10. [Styling and Theming](#styling-and-theming)
11. [Contributing](#contributing)
12. [License](#license)

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

- Accessibility: A lightweight, responsive platform that works on low-bandwidth connections.

- Personalized Learning: Connects learners to mentors who match their specific needs.

- Scalability: Designed to support growth and integration with other tools.

- Empowerment: Supports underserved communities by democratizing access to mentorship.

---

## Features
- **Mentor Profiles**: Comprehensive profiles with details on education, work experience, skills, and availability.
- **Search and Filter**: Search mentors by name, expertise, and schedule. Apply filters for targeted results.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Booking System**: Book mentorship sessions.
- **User Authentication**: Secure login and signup features.

---

## Tech Stack
- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **Styling**: Tailwind CSS
- **API Communication**: Axios
- **Type Checking**: TypeScript
- **Version Control**: Git

---

## UI Design

The UI/UX of PIJAR was meticulously crafted using Figma, ensuring a modern and intuitive design. The design process involved:

- User-centric research.

- Wireframing and prototyping.

- Consistent color schemes and typography.

- Accessibility compliance for diverse users.

---

## CI/CD Integration

The project follows a robust CI/CD pipeline using the **Rebase method** to ensure:

- Clean commit histories.

- Automated builds and tests before merging.

- Continuous deployment for rapid feature delivery.

**Deployment**: The application is seamlessly deployed on Vercel, leveraging its powerful infrastructure for fast and reliable performance.

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
