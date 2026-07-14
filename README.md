# TeachBridge

A full-stack MERN-based tutoring platform that connects students with tutors through subject-based search, secure authentication, and session booking.

Built as a scalable web application with separate frontend and backend services, TeachBridge demonstrates REST API development, authentication, database management, and modern React development.

---

## 🌐 Live Demo

**Application:** https://teach-bridge.vercel.app/

---

## Features

### Authentication
- Student & Tutor registration
- Secure login
- Password hashing using bcrypt
- JWT-based authentication

### Tutor Discovery
- Search tutors by subject
- Dedicated tutor profiles
- Separate dashboards for students and tutors

### Booking System
- Book tutoring sessions
- View tutor bookings
- Booking status management

### Backend
- RESTful API architecture
- MongoDB database
- Express.js server
- Modular controllers and routes

---

## Tech Stack

### Frontend
- React
- Vite
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js

### Deployment
- Frontend: Vercel
- Backend: Node.js API

---

## Project Structure

```
TeachBridge
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── config/
│   ├── middleware/
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## Architecture

```
                React Frontend
                      │
                      │ Axios
                      ▼
             Express REST API
                      │
        ┌─────────────┴─────────────┐
        │                           │
 Authentication               Booking API
        │                           │
        └─────────────┬─────────────┘
                      │
                 MongoDB Database
```

---

## API Endpoints

### Authentication

| Method | Endpoint |
|---------|----------|
| POST | `/api/auth/register` |
| POST | `/api/auth/login` |

---

### Tutors

| Method | Endpoint |
|---------|----------|
| GET | `/api/tutors/search` |

---

### Bookings

| Method | Endpoint |
|---------|----------|
| POST | `/api/bookings` |
| GET | `/api/bookings/:tutorId` |

---

## Installation

### Clone the repository

```bash
git clone https://github.com/abhas-singh15/TeachBridge.git

cd TeachBridge
```

---

### Backend

```bash
cd server

npm install

npm run dev
```

---

### Frontend

```bash
cd client

npm install

npm run dev
```

---

## Environment Variables

Create a `.env` file inside the **server** directory.

```env
PORT=8000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## Current Functionality

- User Registration
- User Login
- JWT Authentication
- Tutor Search
- Student Dashboard
- Tutor Dashboard
- Session Booking
- MongoDB Integration
- REST APIs

---

## Future Improvements

- Email verification
- Password reset
- Calendar scheduling
- Video meeting integration
- Tutor ratings & reviews
- Notifications
- Payment gateway
- Admin dashboard
- Availability management
- Profile image uploads

---

## Learning Outcomes

This project strengthened my understanding of

- REST API Development
- Authentication using JWT
- Password Security with bcrypt
- MongoDB Schema Design
- Express Routing
- React Component Architecture
- Frontend–Backend Communication
- Full Stack Application Development

---

## Author

**Abhas Kumar**

GitHub: https://github.com/abhas-singh15

LinkedIn: *(Add your profile here)*

---

## License

This project is intended for educational and portfolio purposes.
