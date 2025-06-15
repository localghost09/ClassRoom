const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const listingSchema = new Schema({
    titile : {
        type:String,
        required : true
    },
    description : String,

    image : {
        type : String,
        default : "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlmZXxlbnwwfHwwfHx8MA%3D%3D",
        set : (v) => v === "" ? "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlmZXxlbnwwfHwwfHx8MA%3D%3D" : v
    },
    price : Number,
    location : String,
    country : String,

});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;