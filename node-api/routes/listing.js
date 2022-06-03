const Listings = require("../models/Listings");
const express = require('express');
const router = express.Router();
const {verifyToken, verifyTokenAndAuthorization, verifyAdmin} = require("../middlewares/verifyToken");
//----------CREATE------------

router.post('/createListing', async (req,res)=>{
    //console.log(req.body);
    const createdListing = new Listings(req.body);
    const savedListing = await createdListing.save();
    res.json(savedListing);
})

//---------READ-Listings------------

// router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
//       const cart = await Cart.findOne({ userId: req.params.userId });
//       res.json(cart);
//   });

//   //----------------Find All Listings---------------

router.get("/showMyListings/:userId", verifyTokenAndAuthorization, async (req, res) => {
    const sessions = await Listings.find({poster:req.params.userId}).sort( { createdAt: 1 } );
    res.json(sessions);
});

router.get("/showListing/:id", async (req, res) => {
    const session = await Listings.findById(req.params.id);
    res.json(session);
});


//   //----------------Find Listing for Guest---------------

// // //GET 

router.get("/showListingsAll", async (req, res) => {
    let current = new Date();
    current.setDate(current.getDate() - 1).toString();
    const sessions = await Listings.find({date: { $gte: current } }).sort( { date: 1 } );
    res.json(sessions);
});



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

router.delete("/:id",(req, res)=>{
    Listings.findByIdAndDelete(req.params.id, (err, result) =>{
      if (err){
          console.log(err)
      }
      else{
          res.json("Deleted : ");
      }
  });
  })

module.exports=router;