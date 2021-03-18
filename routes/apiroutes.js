const router = require("express").Router();
const Workout = require("../models/workout")


router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
     dbWorkout.forEach(workout => {
         let total = 0;
          workout.exercises.forEach(element => {
            total += element.duration;
          });
          workout.totalDuration = total;
        });  
        console.log(dbWorkout)
        res.json(dbWorkout);
      }) 
      .catch(err => {
        res.status(400).json(err);
      });
  });


router.post("/api/workouts", (req, res) => {
   Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
   .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        {_id: params.id},
        {$push: {exercises: body }},
        {new: true})
        .then(updatedWorkout =>{
            res.json(updatedWorkout);
        })
        .catch(err => {
          res.status(400).json(err);
        })
    });

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      /*   Workout.aggregate({
                $group: {
                    _id: '',
                    totalDuration: { $sum: '$duration' }
                }
             }, {
                $project: {
                    _id: 0,
                    duration: '$duration'
                }
            }) */
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
}); 

module.exports = router
