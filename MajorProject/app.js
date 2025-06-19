const express = require("express")
const app = express();
const mongoose = require("mongoose")
const Listening = require("../MajorProject/models/listing.js");
const Listing = require("../MajorProject/models/listing.js");
const path = require("path");

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

main().then(()=>{
    console.log("Connected to db");
    
}).catch((err)=>{
    console.log(err);
    
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));

const port = 8080;
app.get("/",(req,resp)=>{
    resp.send("working");
})
//  Index Route
app.get("/listings",async(req,resp)=>{
    const allListings = await Listing.find({});
    resp.render("../views/listings/index.ejs",{allListings});
})

// New Route
app.get("/listings/new",(req,resp)=>{
    resp.render("listings/new.ejs");
})
 

//Show Route
app.get("/listings/:id",async(req,resp)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    resp.render("listings/show.ejs", {listing});
})

//Create Route
app.post("/listings", async(req,resp)=>{
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    resp.redirect("/listings");
    
})

// app.get("/testListing",async(req,resp)=>{
//     let sampleListening = new Listing ({
//         titile : "MY new Villa",
//         description : "By the beach",
//         price : 1200,
//         location : " Calangute, Goa",
//         country : "India"
//     });
//     await sampleListening.save();
//     console.log("sample was saved");
//     resp.send("succesfully tested");
    
// })


app.listen(port,()=>{
    console.log(`Listening On Port ${port}`);
    
})