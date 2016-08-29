FROM node

COPY npmrc /root/.npmrc

RUN mkdir -p /app
WORKDIR /app

RUN apt update
RUN apt install vim-tiny
