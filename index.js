const express = require('express');
const app = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 4000;


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/signin' , (req,res)=>{
    res.send("signin page");
});

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})
