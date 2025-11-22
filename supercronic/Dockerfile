FROM alpine:latest

RUN apk add --no-cache \
	supercronic \
	curl ca-certificates \
	tzdata
	
COPY docker/crontab /crontab

ENTRYPOINT ["/usr/bin/supercronic", "/crontab"]
