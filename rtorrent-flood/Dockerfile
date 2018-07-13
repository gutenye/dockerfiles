FROM lsiobase/alpine.armhf:3.8

ARG FLOOD_VER=master

COPY qemu-arm-static /usr/bin/

RUN apk add --no-cache nodejs npm  && \
  apk add --no-cache --virtual=build-deps gcc make python2
# RUN apk add --no-cache --virtual=build-deps g++ gcc make python2 argon2

RUN echo "**** install flood ***" && \
  mkdir /app/flood && \
  cd /app/flood && \
  wget -qO- https://github.com/jfurrow/flood/archive/${FLOOD_VER}.tar.gz | tar zx --strip 1 && \
  npm install && \
  echo "**** cleanup ****" &&\
  npm cache clean --force &&\
  apk del build-deps

COPY root/ /

# needs /app/flood/config.js
RUN cd /app/flood/ && npm run build

EXPOSE 3000 49184 49184/udp
VOLUME /downloads /flood-db
