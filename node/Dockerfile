FROM node

ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8
ENV LANGUAGE=C.UTF-8

RUN mkdir -p /app
WORKDIR /app

COPY npmrc /root/.npmrc
COPY yarnrc /root/.yarnrc

#RUN npm install -g yarn && \
#  rm -rf /root/.npm

run curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && \
    apt-get install -y yarn vim-tiny curl && \
    rm -rf /var/lib/apt/lists/*
