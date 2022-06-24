const Emails = require("../models/Emails");
const User = require ('../models/User');
const nodemailer = require("nodemailer");
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


  "use strict";

  router.post('/resetPassword', async (req,res)=>{
    console.log(req.body.email)
        
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    try{
        User.findOne({email:req.body.email}, (err,result)=>{
            if(!result){
                res.send("No Such User Exists on System");
            }else{
                async()=>{
                let transporter = nodemailer.createTransport({
                    host: "smtp.mail.yahoo.com",
                    port: 465,
                    service:'yahoo',
                    secure: false, // true for 465, false for other ports
                    auth: {
                      user: testAccount.user, // generated ethereal user
                      pass: testAccount.pass, // generated ethereal password
                    },
                    logger: true
                  });
                
                  // send mail with defined transport object
                  let info = await transporter.sendMail({
                    from: '"Fred Foo 👻" <foo@example.com>', // sender address
                    to: req.body.email, // list of receivers
                    subject: "Hello ✔", // Subject line
                    text: Math.floor(Math.random() * 10000), // plain text body
                    html: "<b>Hello, User here is your login Password, use it to login and change password as soon as Possible</b>", 
                    // html body
                  });
                
                  res.send("Message sent: %s", info.messageId);
                  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                
                  // Preview only available when sending through an Ethereal account
                  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            }}
        })
    }catch(err){
        res.status(101);
    }
    //let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    })
  
  
module.exports=router;