# syntax=docker/dockerfile:1-labs 

FROM alpine:latest

EXPOSE 80

ARG TARGETARCH

RUN apk add --no-cache \
	# cron
	supercronic \
	# curl & https
	curl ca-certificates \
	# timezone
	tzdata
	
# logdy
RUN curl -L https://github.com/logdyhq/logdy-core/releases/latest/download/logdy_linux_${TARGETARCH} -o /usr/local/bin/logdy \
  && chmod +x /usr/local/bin/logdy
  
COPY --parents docker/./* /
  
CMD ["/entrypoint.sh"]