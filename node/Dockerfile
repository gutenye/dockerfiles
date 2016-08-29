FROM node

COPY npmrc /root/.npmrc

RUN mkdir -p /app
WORKDIR /app

RUN apt-get update && \
    apt-get install -y vim-tiny && \
    rm -rf /var/lib/apt/lists/*
