const Emails = require("../models/Emails");
const express = require('express');
const router = express.Router();
const {verifyToken, verifyTokenAndAuthorization, verifyAdmin} = require("../middlewares/verifyToken");
//----------CREATE------------

router.post('/createEmail', async (req,res)=>{
    const createdEmail = new Emails(req.body);
    const savedEmail = await createdEmail.save();
    res.json(savedEmail);
})


// // //GET ALL

router.get("/showEmails", verifyAdmin, async (req, res) => {
    const emails = await Emails.find();
    console.log(emails);
    res.json(emails);

});

// //---------Delete----------

router.delete("/deleteEmail/:id", verifyAdmin, (req, res)=>{
    Emails.findByIdAndDelete(req.params.id, (err, result) =>{
      if (err){
          console.log(err)
      }
      else{
          res.json("Deleted : ");
      }
  });
  })
  
module.exports=router;