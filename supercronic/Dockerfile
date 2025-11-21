FROM alpine:latest

RUN apk add --no-cache \
	supercronic \
	curl ca-certificates \
	tzdata
	
COPY docker/crontab /crontab

CMD ["/usr/bin/supercronic", "/crontab"]
