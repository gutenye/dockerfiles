FROM l3iggs/archlinux
WORKDIR /home/docker
USER docker

RUN sed -i 's/# %wheel ALL=(ALL) NOPASSWD: ALL/%wheel ALL=(ALL) NOPASSWD: ALL/g' /etc/sudoers
RUN useradd -m -G wheel docker && sudo rm -rf /home/docker/*
RUN pacman -Sy --noconfirm --needed git
