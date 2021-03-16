const router = require("express").Router();
const Workout = require("../models/workout")

////app.get 
router.get("/api/workouts", (req, res) => {
    Workout.findAll({})
/*       .sort({ date: -1 }) */
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

/// app.put("/api/workouts/" + id)

router.post("api/workouts", ({ body }, res) => {
Workout.create(body)
.then(dbWorkout => {
  res.json(dbWorkout);
})
.catch(err => {
  res.status(400).json(err);
    });
});


///api(get)("api/workouts/range")


 
module.exports = router 