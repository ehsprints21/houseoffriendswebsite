const LoanUpdated = require("../models/LoanUpdated");
const express = require('express');
const router = express.Router();
const {verifyToken, verifyTokenAndAuthorization, verifyAdmin} = require("../middlewares/verifyToken");
//----------CREATE------------

router.post('/createLoan', async (req,res)=>{
    //console.log(req.body);
    const createdLoan = new LoanUpdated(req.body);
    const savedLoan = await createdLoan.save();
    res.json(savedLoan);
})

//---------READ-Loans------------

// router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
//       const cart = await Cart.findOne({ userId: req.params.userId });
//       res.json(cart);
//   });

//   //----------------Find All Loans---------------

router.get("/showLoansUpdate", verifyTokenAndAuthorization, async (req, res) => {
    const loans = await Loans.find().sort( { createdAt: 1 } );
    res.json(loans);
});


//   //----------------Find Loan for Guest---------------

// // //GET 



// //----------Update------------

// router.put("/:id", verifyTokenAndAuthorization, async (req, res) => { 
//       const updatedCart = await Cart.findByIdAndUpdate(
//         req.params.id,
//         {
//           $set: req.body,
//         },
//         { new: true }
//       );
//       res.json(updatedCart);
//     });

// //---------Delete----------

router.delete("/deleteLoan/:id", verifyTokenAndAuthorization, (req, res)=>{
    Loans.findByIdAndDelete(req.params.id, (err, result) =>{
      if (err){
          console.log(err)
      }
      else{
          res.json("Deleted : ");
      }
  });
  })

module.exports=router;