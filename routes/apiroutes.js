const router = require("express").Router();
const Workout = require("../models/workout")



router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
    /*  dbWorkout.forEach(workout => {
          var total = 0;
          workout.exercises.forEach(e => {
            total += e.duration;
          });
          workout.totalDuration = total;
        });  */
        console.log("this is the dbWorkout get", dbWorkout)
        res.json(dbWorkout);
      }) 
      .catch(err => {
        res.status(400).json(err);
      });
  });



router.post("/api/workouts", async (req, res) => {
  await Workout.create({type: "workout"})
    .then(dbWorkout => {
      console.log("the post data is", dbWorkout)
      res.json(dbWorkout);
    })
   .catch(err => {
      res.status(400).json(err);
    });
});


router.put("/api/workouts/:id", ({body, params}, res) => {
/*    Workout.findOneAndUpdate(
    { _id: params.id},
    { 
      $inc: { totalDuration: body.duration },
      $push: { exercises: req.body }
    },
  { new: true }) */
    const workoutId = params.id;
    let savedExercise = [];
    Workout.find({_id: workoutId})  
  .then(dbWorkout => {
    console.log("this is the put data", dbWorkout)
    savedExercise = dbWorkout[0].exercises;
    res.json(dbWorkout[0].exercises);
    let allExercises = [...savedExercises, body]
    updateWorkout(allExercises) 
    res.json(dbWorkout)
  })
  .catch(err => {
    res.status(400).json(err);
  });

   function updateWorkout(exercises){
    Workout.findByIdAndUpdate(workoutId, { exercises: exercises }, function(err, doc){
      if(err){
          console.log(err)
      }
  });
}
});


router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router