const express = require("express")
const app = express();
const mongoose = require("mongoose")
const Listing = require("./models/listing.js");
const path = require("path");
const methodoverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsycn.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema , reviewSchema} = require("./schema.js");
const Review = require("./models/review.js");

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
});

const validateListing = (req,resp,next)=>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg );
    }else{
        next();
    }
};

const validateReview = (req,resp,next)=>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg );
    }else{
        next();
    }
};




//  Index Route
app.get("/listings",wrapAsync(async(req,resp)=>{
    const allListings = await Listing.find({});
    resp.render("listings/index.ejs",{allListings});
}));

// New Route
app.get("/listings/new",(req,resp)=>{
    resp.render("listings/new.ejs");
})

//Show Route
app.get("/listings/:id",wrapAsync(async(req,resp)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    resp.render("listings/show.ejs", {listing});
}));

//Create Route
app.post("/listings",validateListing, wrapAsync(async(req,resp,next)=>{
        const newlistings = new Listing(req.body.listing);
        await newlistings.save();
        resp.redirect("/listings");
}))

//edit Route
app.get("/listings/:id/edit",wrapAsync(async(req,resp)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);    
    resp.render("listings/edit.ejs",{listing});
}))


// update route 
app.put("/listings/:id",validateListing,wrapAsync(async(req,resp)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    resp.redirect(`/listings/${id}`);
}))


// delete route 
app.delete("/listings/:id", wrapAsync(async(req,resp)=>{
    let {id} = req.params;
    let deletelistings = await Listing.findByIdAndDelete(id);
    console.log(deletelistings);
    resp.redirect("/listings");
}));

//Reviews
//post route

app.post("/listings/:id/reviews",validateReview, wrapAsync(async(req,resp)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    console.log("new review saved");
    resp.redirect(`/listings/${listing._id}`);
    

}))

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
app.all("*",(req,resp,next)=>{
    next(new ExpressError(404,"Page Not Found"))
})

app.use((err,req,resp,next)=>{
    let {statusCode=500, message="Something went wrong"} = err;
    resp.status(statusCode).render("listings/error.ejs",{message});
})

app.listen(port,()=>{
    console.log(`Listening On Port ${port}`);
    
})