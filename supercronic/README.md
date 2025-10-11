# Supercronic

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
	auto reload changes

Open localhost:3000

```