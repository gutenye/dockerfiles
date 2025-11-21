# Supercronic

[![Homepage](https://img.shields.io/badge/homepage-github-blue?style=flat-square)](https://github.com/gutenye/dockerfiles/tree/master/supercronic)
[![Docker Pulls](https://img.shields.io/docker/pulls/gutenye/supercronic?style=flat-square)](https://hub.docker.com/r/gutenye/supercronic)
[![Supercronic](https://img.shields.io/badge/supercronic-gray?style=flat-square)](https://github.com/aptible/supercronic)

## Features

- Added packages: curl, ca-certificates, tzdata

## Getting Started

edit crontab

```sh
* * * * * echo 1
```

edit compose.yml

```yaml
services:
  app:
    image: gutenye/supercronic
    tty: true
    volumes:
      - ./crontab:/crontab
```

start it

```sh
docker compose up
```
