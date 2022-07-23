const express = require('express');
const router = express.Router();
const User = require ('../models/User');
const CryptoJS = require("crypto-js");
const {verifyToken, verifyTokenAndAuthorization, verifyAdmin} = require("../middlewares/verifyToken");

//---------------------------------------Updating username-----------------------------

router.put("/updateUserName/:userId",verifyTokenAndAuthorization, async (req,res)=>{

    const result = await User.findOne({email:req.body.email})
        if(result){
        try{
            const passcheck=req.body.pass;
            const name = req.body.name
        if (CryptoJS.AES.decrypt(result.password, process.env.PASS_SEC).toString(CryptoJS.enc.Utf8)===passcheck){
            let k =  await User.findByIdAndUpdate(req.params.userId, {
                username:name
                }, {new: true}
                    )
                res.json(k);
        }
        console.log('hi');
        }catch(err){
        res.status(101).send("error in updating.");
    }}
})

//---------------------------------------Updating UserPassword-----------------------------

router.put("/updateUserInfos/:userId",verifyTokenAndAuthorization, async (req,res)=>{

    const result = await User.findOne({email:req.body.email})
        if(result){
        try{
            const passcheck=req.body.oldPass;
        if (CryptoJS.AES.decrypt(result.password, process.env.PASS_SEC).toString(CryptoJS.enc.Utf8)===passcheck){
            let k =  await User.findByIdAndUpdate(req.params.userId, {
                password:CryptoJS.AES.encrypt(req.body.newPass, process.env.PASS_SEC).toString()
                }, {new: true}
                    )
                res.json(k);
        }
        }catch(err){
        res.status(101).send("error in updating.");
    }}
})

//---------------------------------------NON - functional-----------------------------

router.put("/updateDocuments/:userId",verifyTokenAndAuthorization, async (req,res)=>{
    try{
        console.log(req.body);
        let prev = await User.findById(req.params.userId, {docs:req.body.item}, {new: true})
        let k =  await User.findByIdAndUpdate(req.params.userId, {docs:req.body.item}, {new: true})
        res.json(k);
    }catch(err){
        res.status(101).send("error in updating.");
    }
})


//---------------------------------   -LOGIN-      --------------------------
router.post("/login", (req,res)=>{
    User.findOne({email:req.body.email}, (err,result)=>{
        const passcheck=req.body.password;
        if (CryptoJS.AES.decrypt(result.password, process.env.PASS_SEC).toString(CryptoJS.enc.Utf8)===passcheck){
//--------------------------------JSON WEBTOKEN CREATION------------

            const accessToken = jwt.sign({
                id:result._id,
                isAdmin:result.isAdmin,
            }, process.env.JWT_SEC,
                {expiresIn:"30d"}
            );

            const {password,...others}=result._doc;
            res.json({...others, accessToken});

        }else{
            return res.json('Cannot Login Check email/password')
        }
    })
})

//---------------------------------   -LOGOUT-      --------------------------
router.post("/logout",verifyTokenAndAuthorization, async (req,res)=>{
    const NewBlack= new Blacklist({
        token: req.headers.token,
    })
    const list=await NewBlack.save();
    res.send("hi you are logged out")
    
})
module.exports=router;