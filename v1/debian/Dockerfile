FROM debian

# RUN sed -i s/deb.debian.org/ftp.cn.debian.org/g /etc/apt/sources.list

RUN apt-get update && \
    apt-get install -y ssh curl httpie && \
    rm -rf /var/lib/apt/lists/*
