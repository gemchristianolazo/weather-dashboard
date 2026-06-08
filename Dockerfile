# Use a lightweight Node.js base image
FROM node:24-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to start the app
CMD ["node", "app.js"]