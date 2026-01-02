FROM alpine:latest AS build

WORKDIR /app

COPY . /app

RUN apk add --no-cache nodejs npm
RUN npm install && npm run build
