FROM node:6.8.0

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json /usr/app/
RUN npm install --production
COPY src /usr/app/src

EXPOSE 80

CMD [ "node", "src/app.js" ]
