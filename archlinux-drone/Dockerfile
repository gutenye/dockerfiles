FROM l3iggs/archlinux

RUN pacman -Sy --noconfirm --needed sudo
ADD https://gist.github.com/pyropeter/556538/raw/4a0650923ad30b2c5096b629cf278b10e070437a/aurupload.sh /usr/bin/aurupload
RUN chmod +x /usr/bin/aurupload \
  && useradd -m -G wheel docker \
  && sed -i 's/# %wheel ALL=(ALL) NOPASSWD: ALL/%wheel ALL=(ALL) NOPASSWD: ALL/g' /etc/sudoers \
  && pacman -Sy --noconfirm --needed git

USER docker
WORKDIR /home/docker
