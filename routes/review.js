const express = require('express');
const router = express.Router({mergeParams : true});

// WrapAsync & ExpressError folder
const wrapAsync = require("../utilts/wrapAsync");


const {  validationReview, isLoggedIn, isReviewAuthor} = require('../middleware');

// Controller 
const reviewController = require("../controllers/reviews");


// Reviews 
// Post Route
router.post("/",
        isLoggedIn,
        validationReview,
        wrapAsync( reviewController.createReview));

// Delete Review Route
router.delete("/:reviewId",
               isLoggedIn,
               isReviewAuthor,
               wrapAsync(reviewController.destroyReview));


module.exports = router; 