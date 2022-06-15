const router = require("express").Router();
const Conversation = require("../models/Conversation");
const User = require("../models/User");

//new conv

router.post("/", async (req, res) => {
  const con = await Conversation.findOne({
    members: { $all: [req.body.senderId, req.body.receiverId] },
    product: req.body.product
  });
  if(!con && (req.body.senderId!= req.body.receiverId)){
    const newConversation = new Conversation({
      members: [req.body.senderId, req.body.receiverId],
      product: req.body.product
    });
    try {
      const savedConversation = await newConversation.save();
      res.status(200).json(savedConversation);
    }catch (err) {
      res.status(500).json(err);
    }
  }else{
    res.json("error");
  }
});

//get conv of a user

router.get("/:userId", async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get("/find/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get conv includes two userId

router.get("/find/:firstUserId/:secondUserId", async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    res.status(200).json(conversation)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
