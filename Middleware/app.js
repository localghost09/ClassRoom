const express = require("express");
const app = express();
const ExpressError = require('./ExpressError');

//middleware -> response send

// app.use((req,resp,next)=>{
//     console.log("hi , i am middleware");
//     next();
    
// });

const checkToken = (req,resp,next)=>{
    let {tokens} = req.query;
    if(tokens === "giveaccess"){
        next();
    }
    throw new ExpressError(404,"ACCESS DENIED"); 
};

app.get("/api", checkToken,(req,resp)=>{
    resp.send("data");
})

app.get("/",(req,resp)=>{
    resp.send("hey i am root"); 
});

app.get("/random", (req,resp)=>{
    resp.send("this is random page");
});

app.get("/err",(req,resp)=>{
    abcd = abcd;
})


app.get("/admin" ,(req,resp)=>{
    throw new ExpressError(403,"Admin access is forbidden");
})

// Logger -morgan
// app.use((req,resp,next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname,req.path,req.time);
//     next(); 
// })




app.use((err,req,resp,next)=>{
    let {status = 500, message="some error occured"} = err;
    resp.status(status).send(message);
});



// app.use((req,resp)=>{
//     resp.status(404).send("Page not found");
// })

app.listen(8080, ()=>{
    console.log("Server Listing to port 8080");
    
});