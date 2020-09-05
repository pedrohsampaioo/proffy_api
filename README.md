<p align="center">	
   <a href="https://www.linkedin.com/in/pedro-henrique-da-silva-sampaio-ba2b7716b/">
      <img alt="Pedro Henrique" src="https://img.shields.io/badge/-PedroHenrique-8257E5?style=flat&logo=Linkedin&logoColor=white" />
   </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-8257E5">
  <a href="https://github.com/RafaelGoulartB/proffy/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/pedrohsampaioo/proffy_api?color=8257E5&logo=github">
  </a>
</p>

> :rocket: Project made to connect teachers to students


# Proffy API

# :notebook_with_decorative_cover: Features

* list and register classes
* records and counts total connections
* show registered subjects

It's important to mention that this application is a reproduction of **NLW # 2** with additional features such as the list of classes without filters and with optional filters, in addition to displaying all the school materials already registered.

Differently from the taught, MYSQL database is used, because my goal was to train the basics of database and config some queries.

The mobile part was also made using flutter:
* **Mobile (in progress)**

# :construction_worker: Installation

**You need to install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) first, then in order to clone the project via HTTPS, run this command:**

```https://github.com/pedrohsampaioo/proffy_api.git```


**To make it easier to install a database correctly, I recommend installing the [Docker](https://docs.docker.com/get-docker/) and running the following commands:**


``` docker run -it  --name proffy_tutorial -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:8.0 ```


``` docker exec -u root  -it proffy_tutorial bash ```

``` mysql -u root -p ```

**Password is 'root'**

``` create database proffy default charset utf8mb4 default collate utf8mb4_general_ci; ```

**you can leave the terminal**


# :runner: Getting Started

Run the migrations in order to configure the database schema

```yarn knex:migrate```

Run the following command in order to start the application in a development environment:

```
# Install Dependencies
$ yarn install

 // Start the server
 $ yarn start
```
