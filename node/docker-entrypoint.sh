#!/usr/bin/env bash

PUID=${PUID:-9999}
PGID=${PGID:-9999}

groupmod -o -g "$PGID" node &>/dev/null
usermod -o -u "$PUID" node &>/dev/null

chown node:node /app
exec gosu node "$@"
