#!/usr/bin/env bash

PUID=${PUID:-9999}
PGID=${PGID:-9999}

groupmod -o -g "$PGID" user &>/dev/null
usermod -o -u "$PUID" user &>/dev/null

chown user:user /app
exec gosu user "$@"
