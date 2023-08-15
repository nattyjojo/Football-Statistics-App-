const express = require("express");
const route = require("./app/routes.js");

const app = express()
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use('', route)

app.listen(3000, (err)=>{
    if(err){
        console.error(err)
    }
})


