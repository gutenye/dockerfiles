# syntax=docker/dockerfile:1-labs 

FROM alpine:latest

RUN apk add --no-cache \
	# desc
	hello
	
COPY --parents docker/./* /
  
CMD ["/entrypoint.sh"]