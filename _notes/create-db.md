- Create a database
```
$ docker exec -it my_postgres psql -U postgres -c "create database airbnb_clone_db_test"
$ docker exec -it my_postgres psql -U postgres -c "create database airbnb_clone_db"
```