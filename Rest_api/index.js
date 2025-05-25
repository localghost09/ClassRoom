const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "localghost678",
        content : "I Love coding",
    },

    {
        username :"kannu678",
        content : " i love localghost678",
    },
    {
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

