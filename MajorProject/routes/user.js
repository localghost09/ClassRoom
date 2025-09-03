const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsycn = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");


router.get("/signup", (req,resp)=>{
    resp.render("users/signup.ejs");
})

router.post("/signup", wrapAsycn(async(req,resp)=>{

    try{
        let {username,email,password} = req.body;
        const newUser = new User ({email , username});
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust");
            resp.redirect("/listings");
        })
        
    } catch(e){
        req.flash("error", e.message);
        resp.redirect("/signup");
    }
    })
);
    // for loggedin
router.get("/login", (req,resp)=>{
    resp.render("users/login.ejs")
})

router.post("/login",saveRedirectUrl,passport.authenticate("local",{failureRedirect : "/login", failureFlash : true,}), async(req,resp)=>{
    req.flash("success", "Welcome back to wanderlust!");
    let redirectUrl = resp.locals.redirectUrl || "/listings"
    resp.redirect(redirectUrl);
})

//Logout User

router.get("/logout", (req,resp,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success", "you are successfully logged out");
        resp.redirect("/listings");
    })
})

module.exports = router;