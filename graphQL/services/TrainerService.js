const trainer = require('../models/Trainer');

const getAllTrainers = async ()=>{
    return await trainer.find({});
}


const getTrainer = async (id)=>{
    const result =  await trainer.find({id:id});
    return result[0];
}

const addTrainer = async (data) => {
    return await trainer.create(data);
}

module.exports = {
    getAllTrainers:getAllTrainers,
    getTrainer: getTrainer,
    addTrainer:addTrainer
}