FROM node:4
ADD ./package.json /morphene-js/package.json
WORKDIR /morphene-js
RUN npm install
ADD . /morphene-js
RUN npm test
