FROM ubuntu

RUN apt-get update \
  && apt-get install -y \
    curl \
    iproute2 \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

CMD ["/bin/sh"]
