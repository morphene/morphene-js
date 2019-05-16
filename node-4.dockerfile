FROM node:4
ADD ./package.json /morphenejs/package.json
WORKDIR /morphenejs
RUN npm install
ADD . /morphenejs
RUN npm test
