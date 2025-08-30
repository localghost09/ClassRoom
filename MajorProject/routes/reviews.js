const express = require("express")
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsycn.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema} = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");



const validateReview = (req,resp,next)=>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg );
    }else{
        next();
    }
};

//post review  route

router.post("/",validateReview, wrapAsync(async(req,resp)=>{
    let listing = await Listing.findById(req.params.id);
    if(!listing){
        throw new ExpressError(404, "Listing not found!");
    }
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    console.log("new review saved");
    req.flash("success", "New Review Created!");
    resp.redirect(`/listings/${listing._id}`);
    

}))

// delete review route

router.delete("/:reviewId",wrapAsync(async(req,resp)=>{
    let {id , reviewId} = req.params;

    let listing = await Listing.findByIdAndUpdate(id, {$pull : {reviews : reviewId}});
    if(!listing){
        throw new ExpressError(404, "Listing not found!");
    }
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");
    resp.redirect(`/listings/${id}`);
}))


module.exports = router;