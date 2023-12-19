# Jewelry API

This is a simple Node.js API for a jewelry store. It uses Express.js for routing and MySQL for the database.

## Features

- CORS enabled
- JSON body parsing
- Endpoints for getting all jewelry items and sending emails

## Endpoints

- `GET /`: Returns a simple "Hello World" message
- `GET /api/get`: Returns all jewelry items from the database
- `POST /email`: Endpoint for sending emails (implementation not shown in the excerpt)

## Setup

1. Clone the repository
2. Run `npm install` to install dependencies
3. Set up your MySQL database and update the connection details in the code
4. Run `npm start` to start the server

Please note that this is a basic setup guide. You may need to perform additional steps depending on your environment.