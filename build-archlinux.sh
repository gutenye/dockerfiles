#!/usr/bin/env bash

dirs="archlinux-devel-with-guten archlinux-autopublish archlinux-autopublish-with-guten"
for dir in $dirs; do
  (cd dir && ./build.sh)
done
