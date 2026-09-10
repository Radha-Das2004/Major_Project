const Listing = require("../models/listing");

// map
const axios = require("axios");

module.exports.index = async (req, res) => {

    const { category, search } = req.query;

    let filter = {};

   if (search) {
    const regex = new RegExp(search, "i");

    filter.$or = [
        { location: regex },
        { country: regex }
    ];

    req.flash("success", `Search results for "${search}"`);
    res.locals.success = req.flash("success");

    } else if (category) {

        filter.category = category;

        req.flash("success", `Showing ${category} listings`);
        res.locals.success = req.flash("success");
    }

    const allListings = await Listing.find(filter);

    res.render("Listings/index.ejs", { allListings });
};


module.exports.searchSuggestions = async (req, res) => {
     const { q } = req.query;

    if (!q) {
        return res.json([]);
    }

    const regex = new RegExp(q, "i");

    const listings = await Listing.find({
        $or: [
            { location: regex },
            { country: regex }
        ]
    })
    .limit(10)
    .select("location country");

    const suggestions = new Set();

    listings.forEach(listing => {

        if (listing.location) {
            suggestions.add(listing.location);
        }

        if (listing.country) {
            suggestions.add(listing.country);
        }

    });

    res.json([...suggestions]);
}



module.exports.renderNewForm =  (req,res) => {
    res.render("listings/new.ejs");
}

module.exports.renderNewFormPost = async (req, res,next) => {
          try {
            // map  start
        let address = `${req.body.listing.location}, ${req.body.listing.country}`;
            
        let geoRes = await axios.get(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`, {
            headers: { 'User-Agent': 'WanderLust-Project-App' }
        });
    
        // map End

        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;

        if (req.file) {
            newListing.image = { url: req.file.path, filename: req.file.filename };
        }

        // map Start
        let lon = geoRes.data[0]?.lon || 77.2090;
        let lat = geoRes.data[0]?.lat || 28.6139;

        newListing.geometry = {
            type: "Point",
            coordinates: [parseFloat(lon), parseFloat(lat)]
        };
        // map end

        // newListing ko save kiya aur variable 'savedListing' me store kiya
        let savedListing = await newListing.save();
       

        req.flash("success", "New Listing Created !");
        // savedListing._id par redirect karein
        res.redirect(`/listings`);
    } catch (err) {
        next(err);
    }
};


module.exports.showListing = async (req,res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
    .populate({
        path:"reviews",
        populate: { path: "author"},
    }).populate("owner");
     if (!listing) {
        req.flash("error","Listing You requested for does not exist!");
          return res.redirect("/listings")
    }
    res.render("Listings/show.ejs",{listing});
}

module.exports.renderEditForm = async(req,res) =>{
    let { id } =req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
          req.flash("error","Listing You requested for does not exist!");
          return res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload","/upload/w_250");
    res.render("Listings/edit.ejs", {listing, originalImageUrl}); 
}

module.exports.updateListing = async (req,res) => {
     if(!req.body.listing){
            throw new ExpressError(400,"send valid data for listing ");
        }
    let { id } = req.params;
        let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
       if (typeof req.file !== "undefined") {
            let url = req.file.path;
            let filename = req.file.filename;
            listing.image = { url, filename };
            await listing.save();
        }
     req.flash("update","Listing Was Update !");
    res.redirect(`/listings/${id}`);
} 

module.exports.destroyListing = async (req,res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("deleted","Delete Listing !");
    res.redirect("/listings");
}