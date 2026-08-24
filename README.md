# Dummy Express REST API

A production-ready, modular RESTful Express.js API service featuring structured logging, error handling, security headers, unit testing, and Docker containerization.

## 🚀 Features

- **Modular Architecture**: Clean separation of concerns with controllers, routes, middleware, and config.
- **Security**: Hardened HTTP headers via `helmet` and CORS control via `cors`.
- **Structured Logging**: JSON logging with timestamp & error stack traces using `winston`.
- **Error Handling**: Operational `ApiError` class hierarchy and global middleware handler.
- **Health Checks**: Kubernetes-ready liveness (`/health/liveness`) and readiness (`/health/readiness`) probes.
- **Automated Testing**: Integration test suite powered by Jest and Supertest.
- **CI/CD**: GitHub Actions workflow for automated testing across Node 18 & 20.
- **Docker Support**: Optimized multi-stage Dockerfile with non-root runtime environment.

---

## 🛠️ Quick Start

### 1. Installation

```bash
npm install
```

### 2. Running Locally

```bash
# Start server in development mode with nodemon
npm run dev

# Start server in production mode
npm start
```

Server runs by default at `http://localhost:4000`.

### 3. Testing

```bash
npm test
```

---

## 📡 API Endpoints Overview

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | API status and root welcome metadata |
| `GET` | `/health` | Detailed system status, uptime & memory metrics |
| `GET` | `/health/liveness` | Liveness check endpoint |
| `GET` | `/health/readiness` | Readiness check endpoint |
| `GET` | `/api/v1` | API v1 index router |
| `GET` | `/api/v1/users` | List all users |
| `GET` | `/api/v1/users/:id` | Get specific user by ID |
| `POST` | `/api/v1/users` | Create a new user record |

---

## 🐳 Docker Deployment

### Run container with Docker Compose

```bash
docker-compose up -d --build
```

---

## 📄 License

ISC License
