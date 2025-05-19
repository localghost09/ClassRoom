const { log } = require("console");
const express = require("express");
const path = require("path"); // <-- fixed here

const app = express();

let port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // <-- using 'path'

app.get("/", (req, resp) => {
    resp.render("home.ejs");
});

app.get("/ig/:username",(req,resp)=>{
    let followers = ['addam', 'kannu', 'addi','manshu'];
    let {username} = req.params;
    resp.render("instagram.ejs",{username,followers});
    
})

app.get("/rolldice", (req, resp) => {
    let diceval = Math.floor(Math.random()*6) + 1;
    resp.render("rolldice.ejs",{diceval});
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});