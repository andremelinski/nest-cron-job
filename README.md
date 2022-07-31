<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


## Description

This project consist in create Tweets that will be saved in a Postgres database and a cron job to create an automation that runs every 5s to catch all tweets and add in a Redis queue. No duplicates will be generated once cache strategy is used. The consumer from this queue will be a email service as nodemailer.

## Enviroment Variables
<p>TYPEORM_CONNECTION=postgres</p>   
<p>TYPEORM_HOST=db</p>
<p>TYPEORM_DATABASE=nest</p>
<p>TYPEORM_USERNAME=postgres</p>  
<p>TYPEORM_PASSWORD=root</p>  
<p>TYPEORM_PORT=5432</p>
<p>TYPEORM_ENTITIES=src/**/*.model.ts </p>
<p>TYPEORM_ENTITIES_DIR=src/models</p>  
<p>TYPEORM_MIGRATIONS=src/migrations/**/*.ts</p>  
<p>TYPEORM_MIGRATIONS_DIR=src/migrations</p>    

## Installation and Runnig the app

```bash
$ docker-compose build
$ docker-compose up
```

## Acess Postgres Database

```bash
# Access Postgress
$  docker exec -tiu postgres nest-bank-db psql

# Access Container
$  docker exec -it <containerId> bash
```
## Stay in touch

- Author - [Andre Melinski](https://kamilmysliwiec.com)
