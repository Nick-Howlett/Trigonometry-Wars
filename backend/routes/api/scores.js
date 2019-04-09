const express = require("express");
const router = express.Router();
const Score = require('../../models/Score');

router.get("/", async (req, res) => {
  const top5 = await Score.find().sort({'score': -1}).limit(5);
  res.json(top5);
});

router.post("/", (req, res) => {
  console.log(req);
  const newScore = new Score({name: req.body.name, score: req.body.score});
  newScore.save()
    .then(score => res.json(score))
    .catch(err => res.json(err));
});

module.exports = router;