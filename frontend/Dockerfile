# Use official Node.js image for React app
FROM node:16

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app code
COPY . .

# Build the React app for production
RUN npm run build

# Expose port 3000 for the React app
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]
