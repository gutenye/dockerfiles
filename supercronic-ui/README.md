# Supercronic UI

[![Homepage](https://img.shields.io/badge/homepage-github-blue?style=flat-square)](https://github.com/gutenye/dockerfiles/tree/master/supercronic-ui)
[![Docker Pulls](https://img.shields.io/docker/pulls/gutenye/supercronic-ui?style=flat-square)](https://hub.docker.com/r/gutenye/supercronic-ui)
[![Supercronic](https://img.shields.io/badge/supercronic-gray?style=flat-square)](https://github.com/aptible/supercronic)

## Features

- Web UI with logdy
- Added packages: curl, ca-certificates, tzdata

## Getting Started

```sh
vi Dockerfile
	FROM gutenye/supercronic-ui
	...

cp compose.yml

docker compose up -d
	# created config files

edit data/config/crontab
	* * * * * echo 1

docker compose restart

Open localhost:3000
```
