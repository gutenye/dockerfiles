FROM l3iggs/archlinux

COPY aurupload/aurupload /usr/bin
RUN pacman -Sy --noconfirm --needed sudo git && rm /var/cache/pacman/pkg/* /var/lib/pacman/sync/*
RUN useradd -m -G wheel docker \
  && sed -i 's/# %wheel ALL=(ALL) NOPASSWD: ALL/%wheel ALL=(ALL) NOPASSWD: ALL/g' /etc/sudoers \

USER docker
WORKDIR /home/docker
