const mongoose = require("mongoose");

const LoanUpdatedSchema = new mongoose.Schema(
    {
        rate: {type: Number},
        time: {type: String},
        interestType: {type: String},
        amount: {type: Number},
        editedLoanId: {type: String},
        isResolved:{type:Boolean, default:false, required: true},
        borrower: {type: String},
        lender: {type: String},
    },
    { timestamps: true }
);
module.exports = mongoose.model("LoansUpdates", LoanUpdatedSchema);