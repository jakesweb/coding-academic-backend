This is a project to set up a course delivery platform for Coding Academic. The current stack uses Node.js with Express.js as the HTTP server. The templates are created with PUG. The database is MongoDB.

---

#### Project structure:

- controllers/
- middlewares/
- models/
- router/
- app.js
- .env _OR_ env.js

---

#### [Controllers](#Controllers)

This is for the storage of the controllers. The controllers are used as the method to query the MongoDB database

### [Middlewares](#Middlewares)

These are the middleware files for the Express.js routes

### [Models](#Models)

These are the models for the MongoDB Schemas

### [Router](#Router)

Used to the store the routes for Express.js

### app.js

The core server file for the application

### .env or env.js

Used to store the environment variables.

---

### Current Application Environment Variables

- MONGO_URI \- URI for accessing the MongoDB database
- SESSION_SECRET \- Secret for user session cookie

---

## Controllers

#### User

- user-controller.js
  _ create \- adds the user to the database. Returns callback(error, user). User has the user information from the MongoDB save
  _ find \- finds the user to login. Returns callback(error,user.email,user.role) for the session

---

## Middlewares

- auth.js \- used to check if user is authenticated with correct role before allowing access to page
- auth-admin.js \- used to check if user is an admin for backend control

---

## Models

### user-model.js

Contains user schema

- email \- String \- user email address
- password \- String \- user password \- stored as bcrypt hash
- role \- String \- user role {student, instructor, admin}
- paid \- Boolean \- determine if user is paid or free tier

### course-model.js

Contains schema for courses

- name \- String \- name of the course
- description \- String \- description of the course
- videoLink \- String \- Link to the video series
- documentLink \- String \- Link to the folder containing the documents

---

## Router

#### Home Routes -- ./router/index.js

- / \- Homepage
- /signup \- Singnup page
- /login \- Login page
- /logout \- Logout GET request -- redirects to either error or homepage

#### User Routes -- ./router/user.js

- /user/singup \- POST \- Create the user account \- redirects to either error or success page
- /user/login \- POST \- Login the user and setup session \- redirects to either error or homepage

#### Admin Routes -- ./router/admin.js

_All routes are secured by the auth-admin.js middleware_

- /admin/course \- GET \- Retrieves all the courses in the database
- /admin/course/:name \- GET \- Retrieve a single course by name
- /admin/course \- POST \- Creates a new course
- /admin/course/:name/:key/:value \- PUT \- Updates a course by name with the new key and value pair
- /admin/course/:name \- DELETE \- Deletes the course with the name provided
