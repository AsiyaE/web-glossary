FROM node:slim

RUN apt update
RUN apt install curl -y

WORKDIR /web-glossary/

COPY public ./public/
COPY src ./src/
COPY package.json ./

RUN npm install
CMD npm start

EXPOSE 3000/tcp
