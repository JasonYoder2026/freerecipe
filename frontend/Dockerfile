# Node image for building Angular
FROM node:20-alpine

WORKDIR /app

# Copy package.json first and install deps
COPY package*.json ./
RUN npm install

# Copy the rest of the files
COPY . ./

# Expose Angular dev server port
EXPOSE 4200

# Start dev server
CMD ["npm", "start"]