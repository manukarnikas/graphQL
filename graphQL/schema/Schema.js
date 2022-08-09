const graphql = require("graphql");
const trainerService = require("../services/TrainerService");
const pokemonService = require("../services/PokemonService");

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLSchema,
} = graphql;

/**Types */

const TrainerType = new GraphQLObjectType({
    name: 'Trainer',
    fields: ()=>({
        id: { type : GraphQLInt },
        name: { type: GraphQLString },
        age:  { type : GraphQLInt },
        trains: {
            type: new GraphQLList(PokemonType),
            resolve: (parent,args)=>{
                return pokemonService.getPokemons(parent.trains)
            }
        },
    })
});

const EvolutionType = new GraphQLObjectType({
    name: "Evolution",
    fields: () => ({
      num: { type: GraphQLString },
      name: { type: GraphQLString },
    }),
  });

const PokemonType = new GraphQLObjectType({
    name: "Pokemon",
    fields: () => ({
      id: { type: GraphQLInt },
      num: { type: GraphQLString },
      name: { type: GraphQLString },
      img: { type: GraphQLString },
      type: { type: new GraphQLList(GraphQLString) },
      height: { type: GraphQLString },
      weight: { type: GraphQLString },
      candy: { type: GraphQLString },
      candy_count: { type: GraphQLInt },
      egg: { type: GraphQLString },
      spawn_chance: { type: GraphQLInt },
      avg_spawns: { type: GraphQLInt },
      spawn_time: { type: GraphQLString },
      multipliers: { type: new GraphQLList(GraphQLInt) },
      weaknesses: { type: new GraphQLList(GraphQLString) },
      next_evolution: { type: new GraphQLList(EvolutionType) },
    }),
  });

/**Root Query and Mutation */

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        trainers: {
            type: new GraphQLList(TrainerType),
            args: {},
            resolve: (parent,args)=>{
                return trainerService.getAllTrainers();
            }
        },
        trainer: {
            type: TrainerType,
            args: { id : { type: GraphQLInt }  },
            resolve: (parent,args)=>{
                return trainerService.getTrainer(args.id);
            }
        },
        pokemon: {
            type: PokemonType,
            args: { id : { type: GraphQLInt }  },
            resolve:  (parent,args)=>{
                return  pokemonService.getPokemon(args.id);
            }
        }
    },
  });
  
  const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
       addTrainer: {
           type: TrainerType,
           args: { 
              id: { type : GraphQLInt }, 
              name: { type: GraphQLString},
              age: { type: GraphQLInt },
              trains: { type: new GraphQLList(GraphQLInt)} 
            },
           resolve:(parent,args)=>{
               return trainerService.addTrainer(args);
           }
       }
    }
  })

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
  });
  