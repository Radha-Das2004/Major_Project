const Listing = require("./models/listing");
const Review = require("./models/review");

// WrapAsync & ExpressError folder
const { listingSchema} = require("./schema");
const ExpressError = require("./utilts/ExpressError");
// joi Schema
const {  reviewSchema } = require("./schema");

module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error"," You must be logged in to Create Listing!");
         return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req,res,next) =>{
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }   
    next();
};

module.exports.isOwner = async(req,res,next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if ( !listing.owner._id.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next ();
}

module.exports.isReviewAuthor = async(req,res,next) => {
    let { id,reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if ( !review.author._id.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not the owner of this Review");
        return res.redirect(`/listings/${id}`);
    }
    next ();
}

// Middleware Joi 
module.exports.validationListing = (req,res,next) =>{
     let {error} = listingSchema.validate(req.body,{ abortEarly: false });
        if(error) {
            let errMsg = error.details.map((el) => el.message).join(",");
           return next(new ExpressError(400, errMsg));
        }else{
            next();
        };
};

module.exports.validationReview = (req,res,next) =>{
     let {error} = reviewSchema.validate(req.body,{ abortEarly: false });
        if(error) {
            let errMsg = error.details.map((el) => el.message).join(",");
           return next(new ExpressError(400, errMsg));
        }else{
            next();
        };
};
