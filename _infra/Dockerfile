FROM node:12.11.1-alpine

WORKDIR /frontend

ENV PATH /frontend/node_modules/.bin:$PATH

COPY frontend/package.json /frontend/package.json

RUN npm install --silent
RUN npm install react-scripts -g --silent

COPY ./frontend /frontend

CMD ["npm", "start"]