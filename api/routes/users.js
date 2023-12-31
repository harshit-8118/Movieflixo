const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");

// update
router.put("/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you can only update your account");
  }
});

router.post("/admin_register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
    isAdmin: req.body.isAdmin,
    profilePic: req.body.profilePic
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user);
    // console.log(CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8));
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete
router.delete("/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("user has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you can only delete your account");
  }
});

// get
router.get("/find/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get All
router.get("/", verify, async (req, res) => {
    const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you can not view all accounts");
  }
});
// get user Stats
router.get('/stats', async (req, res) => {
  const today = new Date();
  // const lastYear = today.setFullYear(today.getFullYear() - 1);
  const monthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  try{
    const data = await User.aggregate([
      {
        $project: {
          month: {$month: "$createdAt"},
        }
      },{
        $group: {
          _id: "$month",
          total: {$sum: 1},
        },
      },
    ]);
    res.status(200).json(data);
  }catch(err){
    res.status(500).json(err);
  }
})

module.exports = router;