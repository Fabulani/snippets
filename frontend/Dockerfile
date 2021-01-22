FROM node:14.15.4-alpine

WORKDIR /app/frontend

COPY package.json yarn.lock ./
RUN yarn install
RUN yarn global add react-scripts@4.0.1
COPY . ./

EXPOSE 3000
