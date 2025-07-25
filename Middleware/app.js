const express = require("express");
const app = express();

//middleware -> response send

// app.use((req,resp,next)=>{
//     console.log("hi , i am middleware");
//     next();
    
// });

app.use("/api",(req,resp,next)=>{
    let {tokens} = req.query;
    if(tokens === "giveaccess"){
        next();
    }
    resp.send("ACCESS DENIED"); 
});

app.get("/wrong",(req,resp)=>{
    abcd = abcd;
})




// Logger -morgan
// app.use((req,resp,next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname,req.path,req.time);
//     next(); 
// })

app.get("/",(req,resp)=>{
    resp.send("hey i am root"); 
});

app.get("/random", (req,resp)=>{
    resp.send("this is random page");
});

app.use((err,req,resp,next)=>{
    console.log(err);
    
});

app.use((req,resp)=>{
    resp.status(404).send("Page not found");
})

app.listen(8080, ()=>{
    console.log("Server Listing to port 8080");
    
});