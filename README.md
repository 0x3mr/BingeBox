# BingeBox

Get up and running:

## Backend Setup (JSON Server)

The backend uses JSON Server to provide a REST API. You have two options to run it:

### Option 1: Using npm script (Recommended)
```bash
# Go to the client folder
cd client

# Start the JSON Server
npm run backend
```

This will start JSON Server on port 4000 watching `server/database.json`.

### Option 2: Using npx directly
```bash
# Go to the client folder
cd client

# Start the JSON Server on port 4000
npx json-server --watch server/database.json --port 4000
```

## Frontend Setup

```bash
# Make sure you're in the client folder
cd client

# Install dependencies (if not already done)
npm install

# Start the development server (open in a new terminal)
npm run dev
```

**Note:** Make sure the backend (JSON Server) is running before starting the frontend, as the app needs to fetch data from the API.
