FROM node:6
ADD ./package.json /morphene-js/package.json
WORKDIR /morphene-js
RUN npm install
ADD . /morphene-js
RUN npm test
