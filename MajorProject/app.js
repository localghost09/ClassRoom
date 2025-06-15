const express = require("express")
const app = express();
const mongoose = require("mongoose")
const Listening = require("../MajorProject/models/listing.js");
const Listing = require("../MajorProject/models/listing.js");


const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

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

app.get("/testListing",async(req,resp)=>{
    let sampleListening = new Listing ({
        titile : "MY new Villa",
        description : "By the beach",
        price : 1200,
        location : " Calangute, Goa",
        country : "India"
    });
    await sampleListening.save();
    console.log("sample was saved");
    resp.send("succesfully tested");
    
})


app.listen(port,()=>{
    console.log(`Listening On Port ${port}`);
    
})