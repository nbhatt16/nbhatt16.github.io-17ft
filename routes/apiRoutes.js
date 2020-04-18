const router = require("express").Router();
//import fitness schema
const { Workout } = require("../models/schema");

router.get("/workouts", (req, res) => {
  Workout.find().then(data => {
    res.json(data);
  });
});

router.post("/workouts", function(req, res) {
  Workout.create({})
    .then(data => res.json(data))
    .catch(err => {
      res.json(err);
    });
});

router.put("/workouts/:id", ({ body, params }, res) => {
  console.log(body);
  console.log(params);

  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then(data => res.json(data))
    .catch(err => {
      res.json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  Workout.find()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
