const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema(
    {
        rate: {type: Number},
        time: {type: String},
        propertyType: {type: String},
        amount: {type: Number},
        area: {type: Number},
        address: {type: String},
        city: {type: String},
        state: {type: String},
        title: {type: String},
        description: {type: String},
        isResolved:{type:Boolean, default:false, required:true},
        poster: {type: String},
        posterName: {type: String},
        titlePhoto: {type: String},
        latLon: {type: Object},
        photos: {type: Array},
        location: {type: String},
    },
    { timestamps: true }
);
module.exports = mongoose.model("Listings", ListingSchema);