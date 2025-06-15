const express = require("express")
const app = express();
const mongoose = require("mongoose")


const MONGO_URL = 'mongodb://127.0.0.1:27017/test';

main().then(()=>{
    console.log("Connected to db");
    
}).catch((err)=>{
    console.log(err);
    
})

async function main() {
    await mongoose.connect(MONGO_URL);
}


const port = 8080;
app.get("/",(req,resp)=>{
    resp.send("working");
})

app.listen(port,()=>{
    console.log(`Listening On Port ${port}`);
    
})