FROM node:18

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port sesuai .env
EXPOSE 3011

CMD ["node", "src/server.js"]