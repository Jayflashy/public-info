# About Public Info
A simple REST API built with Node.js and Express that returns basic information including an email address, current datetime, and GitHub repository URL.

## Features

- Returns JSON response with required information
- Handles CORS
- Dynamic datetime generation in ISO 8601 format
- Fast response time (<500ms)

## Technologies Used

- Node.js
- Express
- CORS

## Prerequisites

- Node.js (v14 or higher)
- npm

## Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/jayflashy/public-info
cd your-repo
```

2. Install dependencies:
```bash
npm install
```
3. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Documentation

### Endpoint

- URL: `GET http://localhost:3005`
- Method: `GET`
- No authentication required
- CORS enabled

### Response Format

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/jayflashy/public-info"
}
```

### Example Usage

```bash
curl http://localhost:3005
```

## Backlink

- [HNG Internship Node.js Developers](https://hng.tech/hire/nodejs-developers)

## License

This project is licensed under the MIT License.