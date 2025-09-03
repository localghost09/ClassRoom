module.exports.isLoggedIn = (req,resp,next) =>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl
        req.flash("error", "you must be logged in to create listings");
        return resp.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req,resp,next)=>{
    if(req.session.redirectUrl){
        resp.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}