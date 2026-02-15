# Gossiper

Gossiper is a real-time messaging application backend built with Express.js and Mongoose. It features user authentication, room management, and automated user redirection based on session status.

## Technologies Used

- **Express.js**: Web framework for Node.js
- **MongoDB & Mongoose**: Database and ODM
- **JWT (JSON Web Tokens)**: Authentication
- **Bcryptjs**: Password hashing
- **Cookie-parser**: Cookie handling

## Project Structure

- `Controller/`: Logic for handling requests
- `Middleware/`: Custom middlewares (e.g., authentication)
- `Models/`: Mongoose schemas
- `Routs/`: API route definitions
- `db/`: Database connection configuration

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add the following:
   ```env
   SERVER_PORT = 8000
   MONGO_URI = your_mongodb_connection_string
   DB_NAME = GOSSIPER
   JWT_SECRET = your_secret_key
   ```
4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication & Redirection
- `GET /auth-check`: Validates JWT and redirects to `/gossip` if valid, otherwise returns login information.

### User Routes (`/api/v0`)
- `POST /register`: Register a new user
- `POST /login`: Authenticate user and receive cookie
- `GET /user`: Get current authenticated user details (Protected)
- `DELETE /user/:id`: Delete a user (Protected)

### Room Routes (`/api/v0`)
- `POST /room`: Create a new room (Protected)

## License
ISC
