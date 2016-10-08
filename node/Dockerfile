FROM node

ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

RUN mkdir -p /app
WORKDIR /app

COPY npmrc /root/.npmrc

RUN apt-get update && \
    apt-get install -y vim-tiny curl && \
    rm -rf /var/lib/apt/lists/*
