# Supercronic

[![GitHub](https://img.shields.io/badge/homepage-github-blue?logo=github&style=flat-square)](https://github.com/aptible/supercronic) 
[![Docker Pulls](https://img.shields.io/docker/pulls/gutenye/supercronic?style=flat-square)](https://hub.docker.com/r/gutenye/supercronic)

> [Supercronic](https://github.com/aptible/supercronic)

## Features

- Web UI with logs

## Getting Started

```sh
vi Dockerfile
	FROM gutenye/supercronic
	...

cp compose.yml

docker compose up -d
	# created config files

edit data/config/crontab
	* * * * * echo 1
	# auto reload changes

Open localhost:3000
```