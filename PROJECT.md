This is a project to setup a course delivery platform for Coding Academic. The current stack uses Node.js with Express.js as the HTTP server. The templates are created with PUG. The database is MongoDB. 

The project folder structure:

  * controllers/
  * middlewares/
  * models/
  * router/
  * views/
  * app.js
  * .env *OR* env.js

### Controllers
This is for the storage of the controllers. The controllers are used as the method to query the MongoDB database

### Middlewares
These are the middleware files for the Express.js routes

### Models
These are the models for the MongoDB Schemas

### Router
Used to the store the routes for Express.js

### Views
Used to store the PUG views for client side work

### app.js
The core server file for the application

### .env or env.js
Used to store the environment variables. Current environment variables:

  #### MONGO_URI
  : The URI for acccessing the MongoDB database
  #### SESSION_SECRET
  : The secret for creating the user session
