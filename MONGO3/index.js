const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const chat = require('./models/chat.js');



const port = 8080;

app.set("viwes", path.join(__dirname, "views"));
app.set("view engine" , "ejs");



main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let chat1 = new chat({
    from : "kannu",
    to : "nikhil",
    msg : "hey nikhil i love you",
    created_at : new Date()
});

chat1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

chat.deleteMany({from:"kannu"}).then((res)=>{
    console.log(res);
    
})

app.get("/",(req,resp)=>{
    resp.send("working");
})


app.listen(port, (req,resp)=>{
    console.log(`Connected Port No : ${port}`);
})


