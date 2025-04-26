# Feedback Collector

A professional-grade, single-page React application for collecting and managing user feedback with a modern, minimalistic design.

## Features

- **Modern UI Design**: Clean, minimalistic interface with intuitive user experience
- **Feedback Form**: Collect user feedback with real-time validation and visual feedback
- **Admin View**: Toggle between user and admin views with a single click
- **Dark/Light Theme**: Toggle between dark and light themes with smooth transitions
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **MongoDB Integration**: Secure storage and retrieval of feedback data
- **Form Validation**: Client-side validation with user-friendly error messages
- **Loading States**: Visual feedback during data submission and retrieval

## Tech Stack

### Frontend
- React 19 (with Vite)
- TailwindCSS for styling with custom design system
- JavaScript ES6+
- Custom hooks for state management
- Responsive design principles

### Backend
- Express.js with structured MVC architecture
- MongoDB (with Mongoose) for data persistence
- Node.js
- Environment-based configuration

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/harshrajjj/Feedback_Collector.git
   cd FeedbackCollector
   ```

2. Install dependencies:
   ```
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Environment Setup:
   - Create a `.env` file in the backend directory with the following variables:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     FRONTEND_URL=http://localhost:5173
     ```
   - Create a `.env` file in the frontend directory with the following variable:
     ```
     VITE_BACKENED_URL=http://localhost:5000
     ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`


## Project Structure

```
FeedbackCollector/
├── frontend/
│   ├── src/             # React components, hooks, and utilities
│   ├── public/          # Static assets
│   └── index.html       # HTML template
└── backend/
    ├── config/          # Configuration files
    ├── controllers/     # Route controllers
    ├── models/          # Database models
    ├── routes/          # API routes
    └── server.js        # Express server setup
```

## Design Patterns

### UI Design
- Clean interfaces with white space
- Card-based layout
- Meaningful icons
- Consistent colors for light and dark modes
- Subtle animations

### Backend Structure
- MVC Pattern
- Modular organization
- Middleware for error handling
- Data access in models

## License

This project is licensed under the MIT License – see the [LICENSE](./LICENSE) file for more details.

## Author

Harsh Kumar