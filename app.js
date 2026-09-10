 if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
} 

 
 // 1. Imports / Requires
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo").default; 
const flash = require("connect-flash")

// Middleware
const {isLoggedIn} =require("./middleware");

// PassPort
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

// Routers & Utils
const listingRouter = require("./routes/listing");
const reviewRouter = require("./routes/review");
const userRouter = require("./routes/user");

const ExpressError = require("./utilts/ExpressError");
const Listing = require("./models/listing");

// 2. Database Connection
async function main() {
  await mongoose.connect(process.env.ATLASDB_URL);
}

main()
 
  .catch((err) => console.log(err));

// 3. View Engine Setup
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 4. Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(methodOverride("_method"));

const store = MongoStore.create({
  mongoUrl: process.env.ATLASDB_URL,
  crypto : {
    secret : process.env.SECRET
  },
  touchAfter : 24 * 3600
});

store.on("error", (err) => {
  console.log("Session Store Error", err);
});

// Express Session
const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie : {
    expires: Date.now() +7 * 24 * 60 *60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true 
  },
};


app.use(session(sessionOptions));
// flash
app.use(flash());

// Passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
//  use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next) =>{
  res.locals.success = req.flash("success");
  res.locals.update = req.flash("update");
   res.locals.deleted = req.flash("deleted");
   res.locals.error = req.flash("error");
   res.locals.currUser = req.user;
  next();
});



// 5. Routes


app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/",userRouter);


// 6. Error Handling
app.all("/*path", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("Listings/err.ejs", { message });
});

// 7. Server Listener
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});