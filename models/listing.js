const { ref } = require("joi");
const mongoose = require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type:String,
        required : true
    },
    description : { 
        type: String,
         required : true
    },
    image  :{
       url : String,
       filename : String,
    },
    price : {
        type:Number,
         required : true
    },
    location : {
        type: String,
        required : true
    },
    country : {
        type: String,
         required : true
    },
    reviews : [{
        type: Schema.Types.ObjectId,
        ref : "Review"
    }],
    owner : {
        type:Schema.Types.ObjectId,
        ref : "User"
    },
    // GeoJSON point coordinates ke liye
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    category : {
        type: String,
        enum: ['rooms', 'iconic cities', 'mountains', 'castles', 'amazing pools', 'camping','farms','arctic','beach',"boats","national parks","lakefront"],
        required: true
    }
})


// Delete Reviews
listingSchema.post("findOneAndDelete", async(listing) => {
    if(listing) {
      await review.deleteMany({ _id : {$in : listing.reviews } });
    }
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;