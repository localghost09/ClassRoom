const express = require("express");

const app = express();
let port = 3000;

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`);
    
})



app.get("/", (req , res)=>{
    res.send("Hey you requested home page")
})

app.get("/about", (req,resp)=>{
    resp.send("Hello this is about");
})

app.get("/help" , (req,res)=>{
    res.send("THis is the help page ")
})