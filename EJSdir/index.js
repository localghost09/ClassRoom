const express = require("express");

const app = express();

let port = 8080;

app.set("view engine","ejs");

app.get("/", (req,resp)=>{
    resp.render("home.ejs");
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
    
})