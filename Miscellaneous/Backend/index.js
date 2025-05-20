const express = require("express");

const app = express();


const port = 8080;

app.get("/register", (req,resp)=>{
    resp.send("standard get request");
});

app.post("/register",(req, resp)=>{
    resp.send("standard post request")
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
    
});