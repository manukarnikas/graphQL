const mongoose = require('mongoose'),
    Schema = mongoose.Schema;


const pokemonSchema = new Schema({

    id: {
        type: Number,
        required: true
    },

    num: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true
    },

    img: {
        type: String,
        required: true
    },

    type: {
        type: Array,
        required: true
    },

    height: {
        type: String,
        required: true
    },

    weight: {
        type: String,
        required: true
    },


    candy: {
        type: String,
        required: true
    },

    candy_count: {
        type: Number,
        required: true
    },

    egg: {
        type: String,
        required: true
    },

    spawn_chance: {
        type: Number,
        required: true
    },

    avg_spawns: {
        type: Number,
        required: true
    },

    spawn_time: {
        type: String,
        required: true
    },


    multipliers: {
        type: Array,
        required: true
    },

    weaknesses: {
        type: Array,
        required: true
    },

    next_evolution: {
        type: Array,
        required: true
    },

}, {
    timestamps: true
});


const pokemon = mongoose.model('pokemons', pokemonSchema);

module.exports = pokemon;