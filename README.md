This is a project to set up a course delivery platform for Coding Academic. The current stack uses Node.js with Express.js as the HTTP server. The templates are created with PUG. The database is MongoDB. 

---

#### Project structure:

  * controllers/
  * middlewares/
  * models/
  * router/
  * views/
  	* style/
  * app.js
  * .env *OR* env.js

---

#### [Controllers](#Controllers)
This is for the storage of the controllers. The controllers are used as the method to query the MongoDB database

### [Middlewares](#Middlewares)
These are the middleware files for the Express.js routes

### [Models](#Models)
These are the models for the MongoDB Schemas

### [Router](#Router)
Used to the store the routes for Express.js

### [Views](#Views)
Used to store the PUG views for client side work

### app.js
The core server file for the application

### .env or env.js
Used to store the environment variables.

---

### Current Application Environment Variables
* MONGO_URI \- URI for accessing the MongoDB database 
* SESSION_SECRET \- Secret for user session cookie

---

## Controllers

#### User
* user-controller.js 
	* create \- adds the user to the database. Returns callback(error, user). User has the user information from the MongoDB save
	* find \- finds the user to login. Returns callback(error,user.email,user.role) for the session

---

## Middlewares

* auth.js \- used to check if user is authenticated with correct role before allowing access to page
* auth-admin.js \- used to check if user is an admin for backend control

---

## Models

### user-model.js

Contains user schema

* email \- String \- user email address
* password \- String \- user password \- stored as bcrypt hash
* role \- String \- user role {student, instructor, admin}
* paid \- Boolean \- determine if user is paid or free tier

### course-model.js

Contains schema for courses

* name \- String \- name of the course
* description \- String \- description of the course
* videoLink \- String \- Link to the video series
* documentLink \- String \- Link to the folder containing the documents

---

## Router

#### Home Routes  -- ./router/index.js

* / \- Homepage
* /signup \- Singnup page
* /login \- Login page
* /logout \- Logout GET request -- redirects to either error or homepage

#### User Routes -- ./router/user.js
* /user/create \- Create the user account \- redirects to either error or success page
* /user/use \- Login the user and setup session \- redirects to either error or homepage

#### Admin Routes -- ./router/admin.js
* /admin \- The base admin page for the backed \- renders the admin.pug template

---

## Views

style stores the CSS files and these are filled in with the include form PUG

* error \- for error pages
* homepage \- homepage
* loggedout \- shows user is now logged out
* login \- login form
* signup \- signup form
* signupsuccess \- signup successfully form
* admin \- admin page
* unauthorized \- warning for unauthorized resource access
