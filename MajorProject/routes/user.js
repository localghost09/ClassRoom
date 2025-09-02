const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsycn = require("../utils/wrapAsycn");
const passport = require("passport");


router.get("/signup", (req,resp)=>{
    resp.render("users/signup.ejs");
})

router.post("/signup", wrapAsycn(async(req,resp)=>{

    try{
        let {username,email,password} = req.body;
        const newUser = new User ({email , username});
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.flash("success", "Welcome to Wanderlust");
        resp.redirect("/listings");
    } catch(e){
        req.flash("error", e.message);
        resp.redirect("/signup");
    }
    })
);
    
router.get("/login", (req,resp)=>{
    resp.render("users/login.ejs")
})

router.post("/login",passport.authenticate("local",{failureRedirect : "/login", failureFlash : true,}), async(req,resp)=>{
    req.flash("success", "Welcome back to wanderlust!");
    resp.redirect("/listings");
})

module.exports = router;