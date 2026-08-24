const express = require('express');
const app = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 4000;


app.get('/', (req, res) => {
    res.send('Hello Amaan 95 !');
});
app.get('/home' , (req,res)=>{
    res.send("Home Page ! ");
});

app.use(express.json());

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})
