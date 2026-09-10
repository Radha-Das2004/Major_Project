const express = require('express');
const router = express.Router();
// WrapAsync & ExpressError folder
const wrapAsync = require("../utilts/wrapAsync");
const ExpressError = require("../utilts/ExpressError");


// Image File Upload
const multer  = require('multer')
const { storage } = require('../cloudConfig');
const upload = multer({ storage });


const { isLoggedIn, isOwner, validationListing} = require('../middleware');

// Controllers
const listingControllers = require("../controllers/listings");


router
   .route("/")
        .get( wrapAsync(listingControllers.index)) //  SHow All Listing
       .post( 
        upload.single('listing[image]'),
        validationListing,
        wrapAsync(listingControllers.renderNewFormPost)); //Create Listings


// new route , Create New Listings
router.get("/new",
        isLoggedIn,
        listingControllers.renderNewForm);

router.get("/search-suggestions", wrapAsync(listingControllers.searchSuggestions));

router
    .route("/:id") 
    .get( wrapAsync(listingControllers.showListing))// id Show route
    .put( isLoggedIn,
        isOwner, 
        upload.single('listing[image]'),
        validationListing,
         wrapAsync(listingControllers.updateListing)) //  Update Route
    .delete( 
        isLoggedIn,
        isOwner,
         wrapAsync(listingControllers.destroyListing)); // Delete Route

// Edit Route
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingControllers.renderEditForm));


module.exports = router; 