const Listings = require("../models/Listings");
const express = require('express');
const router = express.Router();
const https = require('https');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
  })
  var upload = multer({ storage: storage, dest: 'uploads/' });
var path = require('path')
const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
const { uploadFile } = require('./s3')
const {verifyToken, verifyTokenAndAuthorization, verifyAdmin} = require("../middlewares/verifyToken");

const storageUrl = require("./s3");


//----------CREATE------------

router.post('/createListing', async (req,res)=>{
    //console.log(req.body);
    const createdListing = new Listings(req.body);
    const savedListing = await createdListing.save();
    res.json(savedListing);
})

//---------READ-Listings - Info from pincode------------
router.post('/usePincode', async (req, resp)=>{
    const pinCode=req.body.pinCode;
    //console.log(pinCode);
    https.get(`https://api.postalpincode.in/pincode/${pinCode}`, (res) => {
    //console.log('statusCode:', res.statusCode);
    
        res.on('data', async (d) => {
            if(JSON.parse(d.toString('utf8'))[0].Status==='Success'){
            const dataSend = await {City: JSON.parse(d.toString('utf8'))[0].PostOffice[0].District, 
                                    State: JSON.parse(d.toString('utf8'))[0].PostOffice[0].State}
            resp.json(dataSend);
            }else{
                const dataSend = await {City: 'Invalid PinCode', 
                                    State: null}
                resp.json(dataSend);
            }
        });
    
    }).on('error', (e) => {
        console.error(e);
    });
    
})

// -------------------------Sending Imageto aws bucket-----------

// router.post('/sendImage', upload.single('image'), async (req, resp)=>{

    
//     const file = req.file
//     //console.log(file)
//     const result = await uploadFile(file)
//     if(file){
//         await unlinkFile(file.path)
//     }
//     //console.log(result)
//     resp.json({imagePath: result})
// })

router.post('/sendImage', storageUrl.single('image'), async (req, res)=>{

    
    try {
        let responseObj = {
            fileSavedUrl: req.file.location,
            destination: req.file.location,
            fileName: req.file.originalname
        }
        res.json({
            data:responseObj
        })

    } catch (err) {
        res.json({
            error:err.message
        })

    }
})

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
    const sessions = await Listings.find({}).sort({"createdAt": -1}).exec()
    res.json(sessions);
});



// //----------Update (Non functional)------------

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

router.get('/get_state', async (req,res)=>{
    try {
        let state = req.query.state;
        console.log(state);
        let data = await Listings.find({state:state});
        res.json({
            data:data
        })
    } catch (error) {
        res.json({
            error:error.message
        })
    }
})

router.get('/get_city', async (req,res)=>{
    try {
        let city = req.query.city;
        console.log(city);
        let data = await Listings.find({city:city});
        res.json({
            data:data
        })
    } catch (error) {
        res.json({
            error:error.message
        })
    }
})

module.exports=router;
