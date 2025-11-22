# Supercronic

[![Homepage](https://img.shields.io/badge/homepage-github-blue?style=flat-square)](https://github.com/gutenye/dockerfiles/tree/master/supercronic)
[![Docker Pulls](https://img.shields.io/docker/pulls/gutenye/supercronic?style=flat-square)](https://hub.docker.com/r/gutenye/supercronic)
[![Supercronic](https://img.shields.io/badge/supercronic-gray?style=flat-square)](https://github.com/aptible/supercronic)

## Screenshots

![screenshot](./screenshots/screenshot1.png)

## Features

- Human-friendly log messages
- Added pino-pretty
- Added packages: curl, ca-certificates, tzdata

## Getting Started

Edit crontab

```sh
* * * * * echo 1
```

Edit compose.yml

```yaml
services:
  app:
    image: gutenye/supercronic
    volumes:
      - ./crontab:/crontab
```

Run it

```sh
docker compose up
```