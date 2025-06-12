const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const chat = require('./models/chat.js');



const port = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname,"public")));



main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}


app.get("/",(req,resp)=>{
    resp.send("working");
})

app.get("/chats",async(req,resp)=>{
    let chats = await chat.find();
    console.log(chats);
    
    resp.render("chats.ejs",{chats});
})

// new Route
app.get("/chats/new", (req,resp)=>{
    resp.render("new.ejs");
})


app.listen(port, (req,resp)=>{
    console.log(`Connected Port No : ${port}`);
})


