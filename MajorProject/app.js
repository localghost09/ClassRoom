const express = require("express")
const app = express();
const mongoose = require("mongoose")
const Listening = require("../MajorProject/models/listing.js");
const Listing = require("../MajorProject/models/listing.js");
const path = require("path");
const { log } = require("console");
const methodoverride = require("method-override");
const ejsMate = require("ejs-mate");

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
app.use(methodoverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

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
    // Convert string URL to image object if needed
    if (typeof req.body.listing.image === 'string') {
        req.body.listing.image = {
            filename: "listingimage",
            url: req.body.listing.image
        };
    }
    const newlistings = new Listing(req.body.listing);
    console.log(newlistings);
    await newlistings.save();
    resp.redirect("/listings");
    
})

//edit Route
app.get("/listings/:id/edit",async(req,resp)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    resp.render("listings/edit.ejs",{listing});
})


// update route 

app.put("/listings/:id",async(req,resp)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    resp.redirect("/listings");
})


// delete route 
app.delete("/listings/:id", async(req,resp)=>{
    let {id} = req.params;
    let deletelistings = await Listing.findByIdAndDelete(id);
    console.log(deletelistings);
    
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