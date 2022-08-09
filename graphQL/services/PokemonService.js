const pokemon = require('../models/Pokemon');

const getPokemon = async (id)=>{
    const result = await pokemon.find({id:id});
    return result[0];
}

const getPokemons = async (data) =>{
    data = await Promise.all(data.map(async (val)=>{
        const result = await pokemon.find({id:val});
        if(result?.[0]){
            return result[0];
        }
        return;
    }));
    return data;
}


module.exports = {
    getPokemon,
    getPokemons
}