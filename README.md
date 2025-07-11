# Noteapp-backend

# July Note App - Backend

This is the backend of **July Note App**, a simple note-taking API with user authentication built using **Node.js**, **Express.js**, **MongoDB**, and **JWT**. It provides functionality for user registration, login, and secure CRUD operations on personal notes.

---

## 🚀 Features

- **User Authentication** (JWT-based)
- **Password Encryption** (using bcrypt)
- **Create, Read, Delete Notes**
- **Protected Routes** for note management
- **MongoDB Integration** with Mongoose

---

## 📁 Project Structure
├── config/
│ └── db.js # MongoDB connection setup
├── middleware/
│ └── auth.middleware.js # JWT authentication middleware
├── model/
│ ├── note.model.js # Note schema
│ └── user.model.js # User schema
├── routes/
│ ├── note.routes.js # Note-related endpoints
│ └── user.routes.js # User-related endpoints
├── index.js # Main entry point
├── package.json




---

## 🔧 Installation & Usage

### Prerequisites

- Node.js (v14+)
- MongoDB (local or cloud)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/july-note-backend.git
cd july-note-backend


2. Install Dependencies
- npm install


3. Configure MongoDB
In config/db.js, replace the connection string with your MongoDB URI:
mongoose.connect("your_mongo_db_url_here");


4. Start the Server
npm run server
Server will run on: http://localhost:8080
