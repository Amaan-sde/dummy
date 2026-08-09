const express = require('express');
const app = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 4000;


app.get('/', (req, res) => {
    res.send('Hello Pandey!');
});

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})
