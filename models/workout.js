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
                type: STRING,
                trim: true,
            },
            name: {
                type: STING,
            },
            duration: {
                type: INTEGER,
            },
            weight: 

        }

    ],
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;