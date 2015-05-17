FROM nfnty/arch-devel

#RUN echo 'Server = http://mirrors.aliyun.com/archlinux/$repo/os/$arch' > /etc/pacman.d/mirrorlist
ADD aurupload/aurupload /usr/bin/
#RUN pacman -U --noconfirm https://github.com/gutenye/archive/releases/download/pacaur/cower-12-2-x86_64.pkg.tar.xz https://github.com/gutenye/archive/releases/download/pacaur/pacaur-4.2.27-1-any.pkg.tar.xz
RUN yes | pacman -U https://github.com/gutenye/archive/raw/master/cower-12-3-x86_64.pkg.tar.xz
# base-devel: sudo binutils grep sed fakeroot
RUN useradd -m -G wheel docker \
  && sed -i 's/# %wheel ALL=(ALL) NOPASSWD: ALL/%wheel ALL=(ALL) NOPASSWD: ALL/g' /etc/sudoers

USER docker
WORKDIR /home/docker
