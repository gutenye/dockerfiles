FROM node

ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8
ENV LANGUAGE=C.UTF-8
ENV SASS_BINARY_SITE=http://npm.taobao.org/mirrors/node-sass
ENV SQLITE3_BINARY_SITE=http://npm.taobao.org/mirrors/sqlite3
ENV ELECTRON_MIRROR=http://npm.taobao.org/mirrors/electron

RUN mkdir -p /app
WORKDIR /app

COPY npmrc /root/.npmrc
COPY yarnrc /root/.yarnrc

RUN apt-get update && \
    apt-get install -y apt-transport-https

#RUN npm install -g yarn && \
#  rm -rf /root/.npm

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && \
    apt-get install -y yarn vim-tiny curl && \
    rm -rf /var/lib/apt/lists/*
