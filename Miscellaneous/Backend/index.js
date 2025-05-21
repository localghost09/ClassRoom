const express = require("express");

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json);

const port = 8080;

app.get("/register", (req,resp)=>{
    let {user,password} = req.query
    resp.send(`standard get request ${user}`);
});

app.post("/register",(req, resp)=>{
    console.log(req.body);
    
    resp.send("standard post request")
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
    
});