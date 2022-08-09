const mongoose = require('mongoose'),
    Schema = mongoose.Schema;


const trainerSchema = new Schema({

    id: {
        type: Number,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true,
    },

    trains: {
        type: Array,
        required: true
    },

}, {
    timestamps: true
});


const trainer = mongoose.model('trainer', trainerSchema);

module.exports = trainer;