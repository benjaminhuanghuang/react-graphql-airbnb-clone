- List 
```
docker images

docker container ls

docker ps

docker ps -a

docker stop [option] container_id
```

- Start Postgres
```
$ docker-compose up
```

- See that it's working
```
$ docker logs -f my_postgres
```

- Try running psql:
```
$ docker exec -it my_postgres psql -U postgres
```
hit CTRL+D to exit

- Create a database
```
$ docker exec -it my_postgres psql -U postgres -c "create database my_database"
```