FROM node

ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8
ENV LANGUAGE=C.UTF-8

RUN apt-get update && \
    apt-get install -y apt-transport-https && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install -y yarn vim-tiny curl && \
    rm -rf /var/lib/apt/lists/*

RUN npm install -g bower

RUN mkdir -p /app
WORKDIR /app

COPY ssh/config /root/.ssh/config

RUN npm config set registry https://registry.npm.taobao.org &&\
  npm config set disturl https://npm.taobao.org/dist && \
  npm config set chromedriver_cdnurl http://cdn.npm.taobao.org/dist/chromedriver && \
  npm config set operadriver_cdnurl http://cdn.npm.taobao.org/dist/operadriver && \
  npm config set phantomjs_cdnurl http://cdn.npm.taobao.org/dist/phantomjs && \
  npm config set fse_binary_host_mirror https://npm.taobao.org/mirrors/fsevents && \
  npm config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass && \
  npm config set electron_mirror http://cdn.npm.taobao.org/dist/electron/
