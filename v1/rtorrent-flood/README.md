** Features **

- Use `gutenye/rtorrent-flood` multi-arch manifest image for both amd64 and arm devices

### docker-compose.yml

```
version: "2"
services:
  app:
    image: gutenye/rtorrent-flood
    environment:
      - PUID=1000
      - FLOOD_SECRET=secret  # random secret for jwt sign
    ports:
      - 3000:80       # flood port
      - 50000:50000   # rtorrent port
      - 50001:50001   # dht port
    volumes:
      - './downloads:/app/rtorrent/downloads'
      - './watch:/app/rtorrent/watch'
      - './data/rtorrent:/app/rtorrent/session'
      - './data:/flood:/app/flood/db'
    restart: always
```

### Log

```
docker-compose exec app tail -f /app/flood/log/current
docker-compose exec app tail -f /data/log/rtorrent.log
```

### Build ARM

```
$ Use ASUS Tinker Board S
$ ./ake build
```

### Multi-arm manifest

```
$ docker manifest create gutenye/rtorrent-flood gutenye/rtorrent-flood:arm gutenye/rtorrent-flood:amd64
$ docker manifest push gutenye/rtorrent-flood
```
