## Recipe API
This is a simple **CRUD (Create, Read, Update, Delete)** API for managing recipes, built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)** using the **MVC pattern**.

## Features :
- Create a new recipe
- Get all recipes
- Get a recipe by ID
- Update a recipe
- Delete a recipe
- MongoDB Atlas integration
- Clean MVC folder structure
- Fully documented API with Postman

## Tech Stack :
- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **Postman** (for API testing)
- **Dotenv** (for managing environment variables)

## API Endpoints :
# Base URL: /api/recipes
1. Create a Recipe
- URL: /api/recipes
- Method: POST
- Success Response: 201 Created

2.  Get All Recipes
URL: /api/recipes
Method: GET
Success Response: 200 OK
Returns an array of recipes.

3.  Get Recipe by ID
URL: /api/recipes/:id
Method: GET
Success Response: 200 OK
Returns a single recipe object.

4.  Update Recipe by ID
URL: /api/recipes/:id
Method: PUT
Success Response: 200 OK

5.  Delete Recipe by ID
URL: /api/recipes/:id
Method: DELETE
Success Response: 200 OK



