const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const chat = require('./models/chat.js');
const methodOverride = require("method-override");




const port = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded ({extended : true}));
app.use(methodOverride("_method"));



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

// create route 

app.post("/chats",(req,resp)=>{
    let {from , to , msg } = req.body;
    let newchat = new chat({
        from : from,
        to : to,
        msg : msg,
        created_at : new Date()
    });
    newchat.save().then((resp)=>{
        console.log(resp);
        
    }).catch((err)=>{
        console.log(err);
        
    })
    console.log(newchat);
    resp.redirect("/chats");
    
})


//Edit Route 
app.get("/chats/:id/edit",async (req,resp)=>{
    let {id} = req.params;
    let foundChat = await chat.findById(id);
    resp.render("edit.ejs",{chat: foundChat});
});

// update Route
app.put("/chats/:id",async(req,resp)=>{
    let {id} = req.params;
    let {msg:newMsg} = req.body;
    let updatedChat = await chat.findByIdAndUpdate(
        id,
        {msg:newMsg},
        {runValidators : true, new:true}
    );
    resp.redirect("/chats");
})

// Destroy Route

app.delete("/chats/:id",async(req,resp)=>{
    let {id} = req.params;
    let deleteChat = await chat.findByIdAndDelete(id);
    resp.redirect("/chats");
})

app.listen(port, (req,resp)=>{
    console.log(`Connected Port No : ${port}`);
})


