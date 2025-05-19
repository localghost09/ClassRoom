const express = require("express");

const app = express();
let port = 3000;

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`);
    
})



app.get("/", (req , res)=>{
    res.send("Hey you requested home page")
})



app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("Nothing searched")
    }
    res.send(`<h1>search result for query @${q} </h1>`);
    
})