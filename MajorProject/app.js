const express = require("express")
const app = express();
const mongoose = require("mongoose")
const path = require("path");
const methodoverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");


const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/reviews.js");
const userRouter = require("./routes/user.js");

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

const sessionOptions = {
    secret : "mysupersecretcode",
    resave : false,
    saveUninitialized : true,
    
    cookie :{
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly : true,
    },
}

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,resp,next)=>{
    resp.locals.success = req.flash("success");
    resp.locals.error = req.flash("error")
    next();
})

const port = 8080;
app.get("/",(req,resp)=>{
    resp.send("working");
});

// app.get("/demouser",async(req,resp)=>{
//     let fakeuser = new User({
//         email : "nikhilprataps66@gmail.com",
//         username : "delta-nikhil"
//     });

//     let registerUser = await User.register(fakeuser,"helloworld");
//     resp.send(registerUser);
// })



app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews",reviewsRouter);
app.use("/",userRouter);


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