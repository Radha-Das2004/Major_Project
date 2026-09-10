// Model
const Listing = require("../models/listing");
// Review
const Review = require("../models/review");

module.exports.createReview = async(req,res) =>{
    let {id } =req.params;
    let listing =await Listing.findById(id);
    let newReview  = new Review(req.body.review);
    // Author Addition
    newReview.author = req.user._id;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash("success","New Reviews Added !");
    res.redirect(`/listings/${id}`);
}

module.exports.destroyReview = async(req,res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findById(reviewId);
    req.flash("deleted","Delete Review !");
    res.redirect(`/listings/${id}`);
} 