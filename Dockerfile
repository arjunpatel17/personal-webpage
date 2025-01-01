# Stage 1: Build Angular app with Node.js
FROM node:16.20.2-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve Angular app with Nginx
FROM nginx:latest
COPY --from=build app/dist/arjuns-profile /usr/share/nginx/html
COPY /nginx.local.conf /etc/nginx/conf.d/default.conf
EXPOSE 80