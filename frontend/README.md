# TP de Groupe : Déploiement d’une Mini-Plateforme Multi-Services avec Docker Compose

## Description

This project is a mini-platform consisting of three services:
1. **Backend**: A Node.js/Express API that provides RESTful endpoints.
2. **Frontend**: A React application that consumes the API.
3. **Database**: MongoDB for data persistence.

The goal is to deploy a fully containerized stack using Docker Compose.

---

## Architecture

### Services
- **Backend**:
  - Exposes two routes:
    - `GET /api/items`: Fetches all items.
    - `POST /api/items`: Adds a new item.
  - Connects to MongoDB for data storage.
- **Frontend**:
  - Displays the list of items fetched from the backend.
  - Allows users to add new items via a form.
- **Database**:
  - MongoDB is used for storing and persisting data.

---

## Prerequisites

- Docker and Docker Compose installed on your machine.
- A `.env` file in the root directory with the following variables:
  ```properties
  MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>
  PORT=5000
  REACT_APP_API_URL=http://backend:5000

  ---

## Setup and Usage

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/tp-groupe.git
cd tp-groupe

### 2. Clone the Repository
 To start all services (backend, frontend, and database), run:
docker-compose up --build

###3. Access the Application
Frontend: http://localhost:3000
Backend: http://localhost:5000/api/items

1What is the difference between build: and image: in Docker Compose?
-build: specifies how to build an image locally using a Dockerfile.
-image: uses a pre-built image from a registry like Docker Hub.

2What is the purpose of using a .env file in a Docker project?
-It centralizes configuration, avoids hardcoding sensitive data, and simplifies updates.

3How do Docker volumes help with data persistence?
-Volumes store data outside the container, ensuring it persists even if the container is restarted or removed.

4How would you add a fourth service (e.g., a reverse proxy like NGINX)?
-Add an NGINX service to the docker-compose.yml file, configure it to route traffic to the frontend and backend, and expose it on port 80.