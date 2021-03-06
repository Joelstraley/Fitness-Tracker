const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
            {
            type: {
                type: String,
                trim: true
            },
            name: {
                type: String,
            },
            duration: {
                type: Number,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            duration: {
                type: Number,
            },
            distance: {
                type: Number,
            },
        },
    ],
    totalDuration: {
        type: Number,
        default: 0
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;