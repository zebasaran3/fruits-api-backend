//How to run the program
const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
const fruits = require("./routes/fruits")

app.get('/', (req, res) => {
   res.send('Hello Fruity!');
})

app.use(express.json());
app.use('/fruits', fruits); // http://localhost:3000/fruits

module.exports = app

