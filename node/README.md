Guten's Node Enviromment
=========================

- USE npm.taobao.com China mirror
- ADD vim

Dockerfile

```
FROM gutenye/node

COPY package.json /app
RUN npm install
COPY . /app

CMD [ "npm", "start" ]
```
