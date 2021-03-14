const mongoose = require("mongoose");

const Schema = mongoose.Schema;

console.log("sup")

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: STRING,
                trim: true,
            },
            name: {
                type: STRING,
            },
            duration: {
                type: INTEGER,
            },
            weight: {
                type: INTEGER,
            },
            reps: {
                type: INTEGER,
            },
            sets: {
                type: INTEGER
            },
            duration: {
                type: INTEGER,
            },
            distance: {
                type: INTEGER,
            },
        },
    ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;