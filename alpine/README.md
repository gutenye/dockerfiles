# Alpine

[![Homepage](https://img.shields.io/badge/homepage-github-blue?style=flat-square)](https://github.com/gutenye/dockerfiles/tree/master/alpine) 
[![Docker Pulls](https://img.shields.io/docker/pulls/gutenye/alpine?style=flat-square)](https://hub.docker.com/r/gutenye/alpine)
[![Alpine](https://img.shields.io/badge/alpine-gray?style=flat-square)](https://hub.docker.com/_/alpine)

> For debugging

## Changes

- Added curl, ca-certificates, tzdata 

## Start

```sh
docker run --rm gutenye/alpine curl ..
```

## Publish

```sh
./ake push
```