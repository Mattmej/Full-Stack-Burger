# Full-Stack-Burger

### Description

This project is another example of a full-stack application, but this time the functionality is spread across multiple files and folders for the purpose of modularity and memory efficiency. In addition, the duties of the server are distributed across the config, controllers, and models folders, and the front-end functionality is handled by a JavaScript web template system known as _Handlebars_. Also, this project involves the creation of an _orm_ to help facilitate SQL queries.

### Required Items

### Node Packages
* Express
* body-parser
* express-handlebars
* mysql

##### Other
* Node.js
* Nodemon (optional)
* SQL IDE

### Details

This application has multiple interconnecting files with more modularity than the previous _FriendFinder_ application, so the file structure will be detailed below, followed by a description of each important file. Files in the file structure will be italicized.

__root__

* config
    * _connection.js_
    * _orm.js_
* controllers
    * *burgers_controller.js*
* db
    * _schema.sql_
    * _seeds.sql_
* models
    * _burger.js_
* node_modules
* public
    * assets
        * css
            * *burger_style.css*
        * images
            _cute-burger.jpg_
        * js
            * *burger_script.js*
* views
    * layouts
        * _main.handlebars_
    * _index.handlebars_
* _.gitignore_
* _package.json_
* _package-lock.json_
* _README.md_
* _server.js_

##### server.js

This file is the "center" of the application. The file performs a number of functions, most of which are performed by importing information from other files in the application. These functions are

* Using routers to redirect urls (by importing *burgers_controller.js*)
* Creating a server (by importing _connection.js_)
* Running SQL queries (by importing _orm.js_ and _burger.js_)
* Setting a default layout for the webpage (no import needed)

##### connection.js

This file is in charge of establishing a connection to the SQL database specified in the _schema.sql_ and _seeds.sql_. The connection in this file is exported so that the _orm.js_ file can use the data in the file.

##### orm.js 

This file imports information from _connection.js_ in order to create an "orm" object with methods that run SQL queries. The purpose of this orm object is to modularize SQL queries so that the responsibility for queries isn't placed upon only one file. The orm object in this file is exported so that the _burger.js_ file can use its data.

##### burger.js

This file imports information from _orm.js_ in order to create a "burger" object which makes the SQL queries from _orm.js_ more specific. In this case, the SQL queries will now reference the table and columns specified in _schema.sql_ and _seeds.sql_. The burger object in this file is exported so that the *burgers_controller.js* file can use its data.

##### burgers_controller.js

This file imports information from _burger.js_ in order to control how information interacts with the various urls specified in the same file. The information in this file is exported in a "router" object so that the server file can use its data (as well as the data from all files *burgers_controller.js* has imported).

##### schema.sql and seeds.sql

These two files are in charge of holding the SQL data to create a "burgers_db" database and insert initial data into the database.

##### The "public" folder

The assets in this folder handle the front-end presentation of the application. The information in these files will be linked by the file _main.handlebars_ in the "views" folder.

##### The "views" folder

The files in this folder are written using _handlebars_ syntax. _Handlebars_ is a web template system that helps make developing dynamic websites easier. 