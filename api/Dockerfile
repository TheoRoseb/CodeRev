# CodeRev API Service (GraphQL + ExpressJS/FeathersJS)
FROM node:9-alpine

MAINTAINER Tom Lavenziano <tomlavenziano@epochzero.com>

WORKDIR /var/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3030

CMD [ "npm", "start"]
