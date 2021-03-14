const router = require("express").Router();
const db = require("../models")



////app.get

/// app.put("/api/workouts/" + id)

app.post("api/workouts", ({ body }, res) => {
db.Workout.create(body)
.then(dbWorkout => {
  res.json(dbWorkout);
})
.catch(err => {
  res.status(400).json(err);
    });
});

///api(get)("api/workouts/range")


