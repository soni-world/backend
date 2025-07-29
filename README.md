# backend
A backend project in node.js and mongo db time tracker task

Project overview
Prerequisites
Installation steps
Environment setup
API documentation
Available endpoints

# Task Management API

A backend project built with Node.js and MongoDB for tracking tasks and time.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

## Local Setup

1. Clone the repository
```bash
git clone https://github.com/soni-world/backend.git
cd backend

2. Install dependencies
npm install

3. Create .env file in root directory

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4. Start the Server
# Development mode
npm run dev

# Production mode
npm start

API Endpoints
Authentication
Register User
POST /api/auth/register
Body:
}
Login
POST /api/auth/login
Body:
}
Tasks
All task endpoints require Authentication token in header: Authorization: Bearer your_jwt_token

Get All Tasks
GET /api/tasks
Returns all tasks for authenticated user
Create Task
POST /api/tasks
Body:
}
Update Task
PUT /api/tasks/:id
Body:
Delete Task
DELETE /api/tasks/:id
Deletes specified task
Error Codes
200: Success
201: Created
400: Bad Request
401: Unauthorized
404: Not Found
500: Server Error
