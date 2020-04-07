## Run server side test
```
  cd ./docker
  docker-compose up   # start Postgres

  redis-server        # start redis

  cd ./server
  yarn test
```