FROM lsiobase/alpine.armhf:3.8

ARG FLOOD_VER=master

COPY qemu-arm-static /usr/bin/

# flood: nodejs npm mediainfo; node-gyp: g++ gcc make python2
# rtorrent: rtorrent unrar
RUN apk add --no-cache nodejs npm mediainfo rtorrent unrar && \
  apk add --no-cache --virtual=build-deps g++ gcc make python2 && \
  echo "**** install flood ***" && \
  mkdir /app/flood && \
  cd /app/flood && \
  wget -qO- https://github.com/jfurrow/flood/archive/${FLOOD_VER}.tar.gz | tar zx --strip 1 && \
  npm install && \
  echo "**** cleanup ****" && \
  npm cache clean --force && \
  apk del build-deps

COPY root/app/flood/config.js /app/flood/config.js
RUN echo "**** build flood ***" && \
  cd /app/flood/ && npm run build

COPY root/ /

EXPOSE 80 50000 50000/udp
VOLUME /app/rtorrent/downloads /app/flood/db
