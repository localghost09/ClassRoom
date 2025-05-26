const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id :"1a",
        username: "localghost678",
        content : "I Love coding",
    },

    {
        id : "1b",
        username :"kannu678",
        content : " i love localghost678",
    },
    {
        id :"1c",
        username: "aditi678",
        content : " i love kannu",
    },
];

app.listen(port, ()=>{
    console.log(`Listening to port : ${port}`);
    
});

app.get("/posts" ,(req,resp)=>{
    resp.render("index.ejs", {posts});
})

app.get("/posts/new", (req,resp)=>{
    resp.render("new.ejs");
})

app.post("/posts", (req,resp)=>{
    let {username, content} = req.body;
    posts.push({username,content});
    // resp.send("post rewuest working");
    resp.redirect("http://localhost:8080/posts");

    
});

app.get("/posts/:id",(req,resp)=>{
    let {id}  = req.params;
    let post = posts.find((p) => id === p.id);
    if (!post) {
        return resp.send("Post not found");
    }
    resp.render("indpost.ejs",{post})
})
