FROM node:18-bullseye

# Instal build tools untuk memastikan sqlite3 bisa dicompile dengan benar
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

# Memaksa npm untuk membangun ulang library binary seperti sqlite3
RUN npm install --build-from-source

COPY . .

EXPOSE 3011

CMD ["node", "src/server.js"]