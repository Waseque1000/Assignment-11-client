# Historical Artifacts Tracker

## Live Link

[Live Link](https://job-portal-0001.web.app/)

## Project Overview

The **Historical Artifacts Tracker** is a web application designed to track historical artifacts, allowing users to browse, add, update, like, and manage artifacts. The application includes features like user authentication, CRUD operations for artifacts, a like system, and dynamic content based on user interactions. The project emphasizes a user-friendly interface and responsiveness across devices.

## Key Features

- **User Authentication:** Email/password login, Google/GitHub social login with Firebase authentication.
- **CRUD Operations:** Users can create, view, update, and delete artifacts. Artifacts include fields such as name, image, description, discovery details, and more.
- **Like System:** Users can like/dislike artifacts, with the like count updated in real-time both on the front-end and in the database.
- **Search Functionality:** Search for artifacts by name on the "All Artifacts" page.
- **Responsive Design:** Fully responsive on mobile, tablet, and desktop devices using Tailwind CSS.
- **Private Routes:** Protected routes for user profiles, liked artifacts, and adding/editing artifacts, with JWT-based authentication.
- **Dynamic Website Title:** Website title changes dynamically based on the current route.
- **Loading Spinner:** Shows a loading spinner while data is being fetched.
- **Toast Notifications:** Inform users of success or failure actions (e.g., adding an artifact, liking an artifact).

## Technologies Used

- **Frontend:**
  - React.js (for UI)
  - Tailwind CSS (for styling)
  - React Router (for routing)
  - Firebase (for authentication)
  - React Toastify (for notifications)
- **Backend:**
  - Node.js (for server)
  - Express.js (for API routes)
  - MongoDB (for data storage)
- **Deployment:**
  - Frontend: Firebase
  - Backend: Vercel
