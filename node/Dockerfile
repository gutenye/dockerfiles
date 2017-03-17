FROM node

ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8
ENV LANGUAGE=C.UTF-8

RUN npm config set registry https://registry.npm.taobao.org
RUN npm config set disturl https://npm.taobao.org/dist
RUN npm config set chromedriver_cdnurl http://cdn.npm.taobao.org/dist/chromedriver
RUN npm config set operadriver_cdnurl http://cdn.npm.taobao.org/dist/operadriver
RUN npm config set phantomjs_cdnurl http://cdn.npm.taobao.org/dist/phantomjs
RUN npm config set fse_binary_host_mirror https://npm.taobao.org/mirrors/fsevents
RUN npm config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass
RUN npm config set electron_mirror http://cdn.npm.taobao.org/dist/electron/

RUN mkdir -p /root/.ssh
RUN mkdir -p /app
WORKDIR /app

RUN npm install -g bower

RUN apt-get update && \
    apt-get install -y apt-transport-https

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && \
    apt-get install -y yarn vim-tiny curl && \
    rm -rf /var/lib/apt/lists/*
