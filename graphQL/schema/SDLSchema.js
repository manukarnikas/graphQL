const { gql } = require('apollo-server');
const trainerService = require("../services/TrainerService");
const pokemonService = require("../services/PokemonService");

const typeDefs = gql`
  type Trainer{
    id: Int
    name: String
    age: Int
    trains: [Pokemon]
  }

  type Query {
    trainers: [Trainer]
    trainer(id: Int): Trainer
  }

  type EvolutionType{
    num : String
    name: String
  }

  type Pokemon{
    id: Int
    num: String
    name: String
    img: String
    type: [String]
    height: String
    weight: String
    candy: String
    candy_count: Int
    egg: String
    spawn_chance: Int
    avg_spawns: Int
    spawn_time: String
    multipliers: [Int]
    weaknesses: [String]
    next_evolution: [EvolutionType]
  }

  type Mutation {
      addTrainer(id: Int, name:String,age:Int, trains: [Int]): Trainer
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

const resolvers = { 
    Trainer: {
       trains: (parent)=>{
            return pokemonService.getPokemons(parent.trains);
       }
    },
    Query: {
      trainers: ()=>{
        return trainerService.getAllTrainers();
      },
      trainer: (parent,args)=>{
          console.log('id-->',args)
        return trainerService.getTrainer(args.id);
      }
    },
    Mutation: {
      addTrainer: (parent,args)=>{
        return trainerService.addTrainer(args);
      }
    }
   
};

module.exports = {
    typeDefs,
    resolvers
}