const express = require('express');
const router = express.Router();
const User = require ('../models/User');
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
var validator = require("email-validator");
const {verifyToken, verifyTokenAndAuthorization, verifyAdmin} = require("../middlewares/verifyToken");

//---------------------------------------REGISTERING NEW USER-----------------------------

router.post('/registration', (req,res)=>{
    if(validator.validate(req.body.email)){
        try{
            User.findOne({email:req.body.email}, (err,result)=>{
                if(!result){
                    const NewUser= new User({
                        username: req.body.username,
                        email: req.body.email,
                        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
                    })
                    const uno= NewUser.save();
                    res.send("User created Successfully.");
                }else{
                    res.send("user already registered.");
                }
            })
        }catch(err){
            res.status(101);
        }
    }else{
        res.send("Check for a Valid Email.")
    }
})


//---------------------------------   -LOGIN-      --------------------------
router.post("/login", (req,res)=>{
    User.findOne({email:req.body.email}, (err,result)=>{
        if(result)
        try{
            const passcheck=req.body.password;
        if (CryptoJS.AES.decrypt(result.password, process.env.PASS_SEC).toString(CryptoJS.enc.Utf8)===passcheck)
        try{
//--------------------------------JSON WEBTOKEN CREATION------------
            const accessToken = jwt.sign({
                id:result._id,
                isAdmin:result.isAdmin,
            }, process.env.JWT_SEC,
                {expiresIn:"30d"}
            );
            const {password,...others}=result._doc;   
            res.json({...others, accessToken});
        }catch(err){
            err.json('Cannot Login Check email/password')
        }
        }catch(err){
            err.send("No such user Found.")
        }
    })
})

//---------------------------------   -LOGOUT-      --------------------------
router.post("/logout", verifyTokenAndAuthorization, async (req,res)=>{
    res.send("hi you are logged out")
})
module.exports=router;
//--------------------------------Sending API Keys--------------
router.get("/cloud", async (req, res)=>{
    res.send(process.env.CLOUD);
})

router.get("/preset", async (req, res)=>{
    res.send(process.env.PRESET);
})