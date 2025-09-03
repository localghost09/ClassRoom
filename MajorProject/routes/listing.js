const express = require("express")
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const {isLoggedIn} = require("../middleware.js");


const validateListing = (req,resp,next)=>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg );
    }else{
        next();
    }
};

//  Index Route
router.get("/",wrapAsync(async(req,resp)=>{
    const allListings = await Listing.find({});
    resp.render("listings/index.ejs",{allListings});
}));

// New Route
router.get("/new",isLoggedIn,(req,resp)=>{
    resp.render("listings/new.ejs");
})

//Show Route
router.get("/:id",wrapAsync(async(req,resp)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if(!listing){
        req.flash("error", "Listing your requested for does not exist!");
        resp.redirect("/listings");
    }
    resp.render("listings/show.ejs", {listing});
}));


//Create Route
router.post("/" ,isLoggedIn,validateListing, wrapAsync(async(req,resp,next)=>{
        const newlistings = new Listing(req.body.listing);
        await newlistings.save();
        req.flash("success", "New Listing Created!");
        resp.redirect("/listings");
}))

//edit Route
router.get("/:id/edit",isLoggedIn,wrapAsync(async(req,resp)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing your requested for does not exist!");
        resp.redirect("/listings");
    }
    resp.render("listings/edit.ejs",{listing});
}))


// update route 
router.put("/:id",isLoggedIn,validateListing,wrapAsync(async(req,resp)=>{
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(!listing){
        throw new ExpressError(404, "Listing not found!");
    }
    req.flash("success", " Listing Updated");
    resp.redirect(`/listings/${id}`);
}))


// delete route 
router.delete("/:id" ,isLoggedIn, wrapAsync(async(req,resp)=>{
    let {id} = req.params;
    let deletelistings = await Listing.findByIdAndDelete(id);
    console.log(deletelistings);
    req.flash("success", " Listing Deleted!");
    resp.redirect("/listings");
}));


module.exports = router;