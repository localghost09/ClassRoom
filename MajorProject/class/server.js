const express = require("express");
const app = express();
const session = require("express-session");

let port = 4001;


app.use(session({secret: "mysupersecretstring", resave:false, saveUninitialized: true}));

app.get("/reqcount",(req,resp)=>{
    if(req.session.count){
        req.session.count++;
    } else{
        req.session.count = 1;
    }
    resp.send(`You sent a request ${req.session.count} times`);
})

// app.get("/test", (req,resp)=>{
//     resp.send("test successful!");
// })


app.listen(port,()=>{
    console.log(`server is listening to ${port}`);
    
})