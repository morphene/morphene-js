FROM node:6
ADD ./package.json /morphenejs/package.json
WORKDIR /morphenejs
RUN npm install
ADD . /morphenejs
RUN npm test
