"use strict";

// Import express
var express = require('express');

// Create an instance of express
var app = express();

// Specify the port to listen on
var port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic GET route
app.get('/', function (req, res) {
  res.send('Welcome to my RESTful API!');
});
app.get('/users', function (req, res) {
  res.json({
    users: [{
      id: 1,
      name: 'John Doe'
    }]
  });
});
app.post('/users', function (req, res) {
  var newUser = req.body;
  res.status(201).json({
    message: 'User created',
    user: newUser
  });
});

// POST route to receive data
app.post('/data', function (req, res) {
  var data = req.body; // data sent from client in the body of the request
  res.status(201).json({
    message: "Data received successfully",
    data: data
  });
});

// PUT route to update data
app.put('/data', function (req, res) {
  var updatedData = req.body; // updated data from client
  res.status(200).json({
    message: "Data updated successfully",
    updatedData: updatedData
  });
});

// DELETE route to delete data
app["delete"]('/data', function (req, res) {
  // Logic to handle data deletion here
  res.status(204).send(); // No content to send back
});

// Listen for requests
app.listen(port, function () {
  console.log("Server is running on http://localhost:".concat(port));
});