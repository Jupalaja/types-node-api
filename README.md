# Posts API
A RESTful API for managing entities, designed to be scalable, sustainable, and easy to use. It has been built using best practices, such as modular design, separation of concerns, and documentation-driven development.
![Captura de Pantalla 2023-03-06 a la(s) 11 58 45 p  m](https://user-images.githubusercontent.com/82126880/223324857-c7f760f1-d613-4d0b-8380-b6b3dacdc294.png)


The API is designed to be easily scalable, with a modular architecture that allows for easy addition of new features and components as needed. It is also designed to be easily sustainable, with code that is easy to maintain and update as necessary. Good practices have been followed throughout the development process, such as using appropriate HTTP methods for each endpoint, returning appropriate status codes, and providing detailed error messages.

You will find a detailed documentation that explains all of its endpoints and how to use them. This documentation is provided in the OpenAPI (formerly known as Swagger) format, which can be easily imported into a variety of tools for testing and development. The documentation includes detailed descriptions of each endpoint, along with example requests and responses.


## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
What things you need to install the software and how to install them:

- Node.js (https://nodejs.org/)
- NPM (https://www.npmjs.com/)

## Installing
Clone the repository:

`
git clone https://github.com/your_username/your_repository.git
`

Install the dependencies:

`
npm install
`

Start the server:

`
npm start
`

The app should be running on http://localhost:3000.

## API Documentation
API documentation is available at http://localhost:3000/api-docs.

## API Endpoints
- GET /posts: get all posts
- GET /posts/{id}: get an post by id
- POST /posts: create a new post
- PUT /posts/{id}: update an post by id
- DELETE /posts/{id}: delete an post by id
  
## Built With
+ Node.js
+ Typescript
+ Express
+ LowDB
+ Swagger

## Author
Jupalaja (jupalaja@gmail.com)

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
