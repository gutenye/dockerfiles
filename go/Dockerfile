FROM bradrydzewski/go:1.3

USER root
ADD https://github.com/gutenye/go.rice/releases/download/v1.0.2/rice /usr/bin/
RUN chmod 755 /usr/bin/rice \
  && apt-get update \
  && apt-get install -y zip \
  && rm -rf /var/cache/apt/archives/* /var/lib/apt/lists/*
USER ubuntu
