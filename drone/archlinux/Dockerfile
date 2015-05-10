FROM nfnty/arch-mini

ADD aurupload/aurupload /usr/bin/
RUN pacman -Sy --noconfirm --needed base-devel git && rm /var/cache/pacman/pkg/* /var/lib/pacman/sync/*
# base-devel: sudo binutils grep sed fakeroot
RUN useradd -m -G wheel docker \
  && sed -i 's/# %wheel ALL=(ALL) NOPASSWD: ALL/%wheel ALL=(ALL) NOPASSWD: ALL/g' /etc/sudoers

USER docker
WORKDIR /home/docker
