# HousingPanda

A full-stack rental listing application built with Angular (frontend), Node.js and Express (backend), and MySQL (database).

## Tech Stack

- Angular (Frontend)
- Node.js & Express (Backend)
- MySQL (Database)

## Getting Started

### Prerequisites

- Node.js and npm installed
- Angular CLI installed globally (`npm install -g @angular/cli`)
- MySQL installed and running

### Instructions to Run the Project

1. Clone the repository and navigate into the project directory.

2. Install dependencies for the backend:

3. Create a `.env` file in the `backend` folder with the following variables:
  - PORT=5000 DB_USERNAME=<your_username> 
  - DB_PASSWORD=<your_password> 
  - DB_HOST=localhost 
  - DB_NAME=housingpanda

4. Ensure your MySQL database is running and the necessary database and tables are created.

5. Start the backend server using nodemon: npx nodemon server.js


6. Open a new terminal and start the frontend Angular server: ng serve

7. Access the application:
- Frontend: http://localhost:4200
- Backend API: http://localhost:5000

## Further Improvements
## Areas for Improvement

The current version of the application includes core functionality for managing listings. However, here are several key features and enhancements that could be added to improve functionality, security, and scalability:

1. **Authentication and Authorization**
   - Implement a login/signup system using JWT (JSON Web Tokens) or session-based authentication.
   - Add role-based access control:
     - Only registered users can add listings.
     - Admins can manage all listings and users.
     - Employees can verify or review listings before publishing.

2. **Login & Logout Forms**
   - Create separate Angular forms for login and registration.
   - Include client-side and server-side validation.

3. **Authorization Middleware**
   - Add Express middleware to protect routes like `/listing/add`.
   - Verify tokens and enforce user roles before processing requests.

4. Mask API endpoints with route parameters or query tokens.

5. **Improved Error Handling**
   - Show user-friendly error messages in the frontend instead of popup.

7. Use local storage or cookies to persist login state across page reloads.


