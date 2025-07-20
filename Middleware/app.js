const express = require("express");
const app = express();

//middleware -> response send

app.get("/",(req,resp)=>{
    resp.send()
})

app.listen(8080, ()=>{
    console.log("Server Listing to port 8080");
    
})