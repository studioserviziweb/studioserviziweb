## Getting Started
The following chapters is about your local environment configuration.

### Patternlab
In order to use patternlab on your local environment please following this steps

```
$ cd path/to/project/root/
$ cd styleguide/
$ composer install
$ php core/console --server --with-watch
```
Now you can see Patternlab at http://localhost:8080

#### Dependencies
In order to install all assets dependencies you should run

```
$ cd sources/
$ bower install
```

##### About @includes
This project needs to be consistent in pattern inclusion, to achieve this you should always include patterns using a relative path.

##### Auto reloading
Install the Auto-Reload Plugin using ```$ composer require pattern-lab/plugin-reload```
## Docker Environment
Feel free to improve Docker environment

### Build
When needed you can build the environment running this command

```
docker-compose -f environment/docker-compose.yml build
```

### Start
For start this project run in console the following command
```
docker-compose -f environment/docker-compose.yml up -d
```

### Stop
For start this project run in console the following command
```
docker-compose -f environment/docker-compose.yml stop
```

## First run
You have to run just the following commands

```
$ cd path/to/project/root/
$ npm install
$ docker-compose -f environment/docker-compose.yml build
$ docker-compose -f environment/docker-compose.yml up -d
```
Now the website should be available at http://localhost

### Admin Credentials
- Username `admin`
- Password `S+smS0K0Pw#2`

## Automations
As said before, this web application uses _Gulp_ for automated tasks.
Below you'll find some task in order to make your coding, faster and simple.

There is no `default` task.

### Patterns sync
You may need to sync patterns across dev environment. To handle this you can:

- **import** : Use this task for sync twig patterns from Wordpress theme into Patternlab
```
$ gulp importPatterns
```
- **export** : Use this task for sync twig patterns from Patternlab into Wordpress theme
```
$ gulp exportPatterns
```

## Note
Some miscellaneous and notes below

- Remember to use autoprefixer;
- For any further informations please contact the Project Owner.

_That's all folks, have fun!_
