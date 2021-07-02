# Build
FROM node:14.15-alpine AS build
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
RUN npm run prod


# Run
FROM nginx:1.17.1-alpine
COPY --from=build app/dist/awesome-angular /usr/share/nginx/html

# optional
COPY default.conf /etc/nginx/conf.d/default.conf
