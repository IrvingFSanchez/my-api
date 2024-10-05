// Import express
const express = require('express');

// Create an instance of express
const app = express();

// Use the PORT from the environment or default to 3000
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic GET route
app.get('/', (req, res) => {
  res.send('Welcome to my RESTful API!');
});

app.get('/users', (req, res) => {
    res.json({ users: [{ id: 1, name: 'John Doe' }] });
  });
  
  app.post('/users', (req, res) => {
    const newUser = req.body;
    res.status(201).json({ message: 'User created', user: newUser });
  });
  
// POST route to receive data
app.post('/data', (req, res) => {
  const data = req.body; // data sent from client in the body of the request
  res.status(201).json({
    message: "Data received successfully",
    data: data
  });
});

// PUT route to update data
app.put('/data', (req, res) => {
  const updatedData = req.body; // updated data from client
  res.status(200).json({
    message: "Data updated successfully",
    updatedData: updatedData
  });
});

// DELETE route to delete data
app.delete('/data', (req, res) => {
  // Logic to handle data deletion here
  res.status(204).send(); // No content to send back
});

// Listen for requests
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});