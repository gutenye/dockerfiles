#!/usr/bin/env sh

if [ -z "$(ls -A /config 2>/dev/null)" ]; then
  cp -r /config-template/* /config
fi

exec supercronic -json /config/crontab 2>&1 | logdy --config /config/logdy.config.json --ui-ip 0.0.0.0 --port 80 --no-analytics