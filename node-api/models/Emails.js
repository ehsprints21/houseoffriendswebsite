const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        emailId: {type: String, required:true},
        userType:{type:String, required: true},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Email", EmailSchema);