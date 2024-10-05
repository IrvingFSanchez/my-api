// Use ES6+ syntax such as arrow functions
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, Babel!');
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));