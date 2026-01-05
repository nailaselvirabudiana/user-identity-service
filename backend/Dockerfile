FROM node:18-bullseye

# Install build tools yang dibutuhkan untuk compile sqlite3 di arsitektur ARM
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Salin file package terlebih dahulu untuk efisiensi cache
COPY package*.json ./

# Install & compile sqlite3 khusus untuk arsitektur target (ARM64)
RUN npm install sqlite3 --build-from-source
RUN npm install

# Salin seluruh kode program
COPY . .

# Port sesuai keinginan Anda
EXPOSE 3011

CMD ["node", "src/server.js"]