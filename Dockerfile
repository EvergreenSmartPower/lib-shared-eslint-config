FROM node:10-alpine

ARG NPM_TOKEN

WORKDIR /src/

RUN apk update
RUN apk add make rsync

COPY .npmrc /src/.npmrc
COPY package.json /src/
COPY package-lock.json /src/
RUN npm ci

COPY . /src/

ENV NPM_TOKEN=0
CMD make test
