FROM bradrydzewski/go:1.3

ADD https://github.com/gutenye/go.rice/releases/download/v1.0.3/rice.tar.gz /usr/bin/
RUN chomd 755 /usr/bin/rice \
  && apt-get update \
  && apt-get install -y zip \
  && rm -rf /var/cache/apt/archives/* /var/lib/apt/lists/*
