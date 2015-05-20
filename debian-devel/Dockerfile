FROM tianon/debian-devel

RUN apt-get update \
  && apt-get install -y aptly \
  && rm -rf /var/lib/apt/lists/*
  && dpkg -i http://x/gutdeb.deb
