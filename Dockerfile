FROM node:12
WORKDIR /opt/server

COPY ./ ./
RUN yarn
