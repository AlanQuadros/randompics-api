FROM node

WORKDIR /tmp/api
COPY . /tmp/api

RUN npm i

EXPOSE 3000
CMD [ "npm", "start" ]



