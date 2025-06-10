const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require('path');

app.set("viwes", path.join(__dirname, "views"));
app.set("view engine" , "ejs");



main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}


const port = 8080;

app.get("/",(req,resp)=>{
    resp.send("working");
})


app.listen(port, (req,resp)=>{
    console.log(`Connected Port No : ${port}`);
})


