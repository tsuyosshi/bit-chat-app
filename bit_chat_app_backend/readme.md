## postgresサーバーの接続

```
$ docker exec -it bit_chat_app_postgres bash
$ root@postgres:/# psql -U user -d bit_chat_app_db
```