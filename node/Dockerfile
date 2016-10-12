FROM node

ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8
ENV LANGUAGE=C.UTF-8

RUN mkdir -p /app
WORKDIR /app

RUN npm install -g yarn && \
  rm -rf /root/.npm

COPY npmrc /root/.npmrc

RUN apt-get update && \
    apt-get install -y vim-tiny curl && \
    rm -rf /var/lib/apt/lists/*
