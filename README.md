# SparkLand

This is a project on an online restaurant, where customers are able to place orders. 
The project is built with Angular on the frontend and NodeJs, Express, MongoDB on the backend.

The current version of this project can be found on https://sparkland.herokuapp.com/

## Runing Project

* Download or clone the project
* Run `npm install` in the project folder to install dependencies needed

Note: The project has already been built with `angular/cli` but not deployed, so `npm install` installs dependencies like `nodemon`, `express` and `mongodb` needed to run a development server

* Run `npm start` in project folder
* Open your browser and go to `localhost:3000` to view the served site


## Project Running Structure

* The server starts up the project loads up `index.html` from the `/dist` folder, thereby handing over routing control to angular
* The server then listens only to calls made to `/api` from the front end
* Server specific files are found in the `/api` folder in the project
* This calls made to `/api` are then handled by the `routes` file
