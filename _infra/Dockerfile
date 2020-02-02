FROM node:12.11.1-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install --silent
RUN npm install react-scripts -g --silent

COPY . /app

CMD ["npm", "start"]