FROM node:12-slim

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "dev" ]
