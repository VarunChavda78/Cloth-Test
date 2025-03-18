# Use Node.js 18 Alpine as the base image
FROM node:18-alpine

# Install necessary dependencies for bcrypt
RUN apk add --no-cache python3 make g++ 

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

# Install dependencies, ensuring bcrypt is built for Alpine
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port and run the app
EXPOSE 5173
CMD ["npm", "run", "dev"]
