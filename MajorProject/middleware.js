module.exports.isLoggedIn = (req,resp,next) =>{
    if(!req.isAuthenticated()){
        req.flash("error", "you must be logged in to create listings");
        return resp.redirect("/login");
    }
    next();
}