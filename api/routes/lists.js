const router = require("express").Router();
const List = require("../models/List");
const verify = require("../verifyToken");
// create

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);
    try {
      const savedList = await newList.save();
      res.status(200).json(savedList);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you are not allowed!");
  }
});

// delete
router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(200).json("List has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you are not allowed!");
  }
});

// update
router.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedList = await List.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedList);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you are not allowed!");
  }
});

// get single list
router.get("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const list = await List.findById(req.params.id);
      res.status(200).json(list);
    } catch (err) {}
  }
});

// get
router.get("/", verify, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];
  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $sample: { size: 12 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      } else {
        list = await List.aggregate([
          { $sample: { size: 12 } },
          { $match: { type: typeQuery } },
        ]);
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 12 } }]);
    }
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
