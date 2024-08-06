# Use a node image as the base
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend source code
COPY . .

# Build the React app
RUN npm run build

# Serve the React app using a simple server
RUN npm install -g serve

# Expose port 3000 to the outside world
EXPOSE 3000

# Serve the app
CMD ["serve", "-s", "build", "-l", "3000"]
