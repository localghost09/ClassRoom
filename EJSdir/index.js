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
    let {username} = req.params;
    const instadata = require("./views/data.json");
    const data = instadata[username];

    if (!data) {
        return resp.send(`<h1>User "${username}" not found.</h1>`);
    }
    
    
    resp.render("instagram.ejs",{ data });
    
})

app.get("/rolldice", (req, resp) => {
    let diceval = Math.floor(Math.random()*6) + 1;
    resp.render("rolldice.ejs",{diceval});
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});