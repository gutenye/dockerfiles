- Based on [wonderfall/rtorrent-flood](https://github.com/Wonderfall/docker-rtorrent-flood)
- Works with ARM
- Use `gutenye/rtorrent-flood` multi-arch manifest image for both amd64 and arm devices

### Build ARM

```
$ Use ASUS Tinker Board S
$ ./ake build
```

### Multi-arm manifest

```
$ docker manifest create gutenye/rtorrent-flood gutenye/rtorrent-flood:arm wonderfall/rtorrent-flood
$ docker manifest push gutenye/rtorrent-flood
```
