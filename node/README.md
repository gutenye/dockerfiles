Guten's Node Enviromment
=========================

- USE npm.taobao.com China mirror
- vim
- curl

Dockerfile

```
FROM gutenye/node

COPY package.json /app
RUN npm install
COPY . /app

CMD [ "npm", "start" ]
```
