const express = require("express");
const app = express();

//middleware -> response send

app.use((req,resp,next)=>{
    console.log("hi , i am middleware");
    next();
    
});

app.get("/",(req,resp)=>{
    resp.send("hey i am root"); 
});

app.get("/random", (req,resp)=>{
    resp.send("this is random page");
});

app.listen(8080, ()=>{
    console.log("Server Listing to port 8080");
    
});