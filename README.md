# Messages-BaatChit

A real-time chat application built with the MERN stack, utilizing JWT tokens for authentication and authorization, and Socket.io for real-time communication. Automated profile icons, emoji support for individual profile, and Zustand for state management are also integrated.

## Features

- **User Authentication**: Sign up and login using JWT tokens.
- **Real-Time Chat**: Powered by Socket.io for seamless, parallel chatting.
- **Automated Profile Icons**: Each user gets a unique profile icon.
- **State Management**: Zustand for efficient and simple state management.
- **Emoji Support**: Personalize your profile with emojis.
- **Secure and Scalable**: Using MongoDB Atlas for the database.

## Tech Stack

- **Frontend**: React + vite, daisy UI, tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT tokens
- **Real-Time Communication**: Socket.io
- **State Management**: Zustand

--
## Screenshots

**Sign up**

![Screenshot 2024-06-11 231705](https://github.com/mohitkrjswl/Chat-App/assets/119107584/762584a0-de81-45f8-a882-c0e6ff5f8b63)

**Login**

![Screenshot 2024-06-11 231646](https://github.com/mohitkrjswl/Chat-App/assets/119107584/dd2512fb-ab8d-4d1b-8abb-4affed255dee)

** Chat-Interface**


![Screenshot 2024-06-11 231010](https://github.com/mohitkrjswl/Chat-App/assets/119107584/1a61710e-46bf-4435-bb79-2c02efce8414)

**Chat-texting**



https://github.com/mohitkrjswl/Chat-App/assets/119107584/9af07326-2c87-4a5a-be91-06bff71f1a11

--

## Installation

1. Clone the repository
    ```bash
    git clone https://github.com/mohitkrjswl/Chat-App.git
    cd  CHAT-APP-2
    ```

2. Install dependencies for both client and server
    ```bash
    # Install backend dependencies
    cd Backend
    npm install

    # Install frontend dependencies
    cd Frontend
    npm install
    ```

3. Set up environment variables

    Create a `.env` file in the `server` directory and add your MongoDB Atlas URI and JWT secret
    ```env
    DB_URL=your_mongodb_url
    JWT_SECRET=your_jwt_secret
    ```

4. Run the application

    Open two terminals: one for the backend and one for the frontend

    ```bash
    # In the server directory
    node server.js

    # In the client directory
    npm run dev
    ```

5. Open your browser and go to `http://localhost:3000`

## Usage

1. **Sign Up**: Create a new account.
2. **Log In**: Use your credentials to log in.
3. **Chat**: Start chatting with other users in real time.

---

**Thank you for checking out my project! Enjoy chatting!**
