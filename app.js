import express from "express";
import route from "./app/routes.js";

const app = express()
app.use(express.static('public'));
app.set('view engine', 'ejs');
import connection from "./database/databaseApp.js";


app.use('', route)

app.listen(3000, ()=>{
    console.log("listening on port: 3000")
})