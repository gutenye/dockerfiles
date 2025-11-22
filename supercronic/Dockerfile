# Stage 1: Build 
FROM oven/bun:alpine AS builder

ARG APP_URL=https://github.com/pinojs/pino-pretty/archive/refs/heads/master.tar.gz

WORKDIR /pino-pretty

RUN apk add --no-cache \
	curl ca-certificates

RUN curl -L $APP_URL \
  | tar -xz  --strip-components=1

RUN bun install --frozen-lockfile

RUN mkdir output \
	&& bun build bin.js --outfile output/pino-pretty --compile --minify --sourcemap \
	&& cp -r help output/ \
	&& find output

# Stage 2: Runtime
FROM alpine:latest

RUN apk add --no-cache \
	supercronic \
	# curl
	curl ca-certificates \
  # timezone
  tzdata \ 
	# Bun C++ runtime 
	libstdc++ 

COPY --from=builder /pino-pretty/output /pino-pretty/

RUN ln -s /pino-pretty/pino-pretty /usr/bin/pino-pretty

COPY docker/entrypoint /entrypoint

ENTRYPOINT ["/entrypoint"]
