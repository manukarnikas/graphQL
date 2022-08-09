const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const { ApolloServer } = require("apollo-server");
const database = require("./database/Database");

const schema = require("./schema/Schema"); // without sdl
const { typeDefs, resolvers } = require("./schema/SDLSchema"); // sdl

const app = express();

const init = () => {
  database.dbInit();

  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(3000, () => {
    console.log("App running on PORT 3000..");
  });

  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(() => {
    console.log(`🚀  Server ready at PORT 4000...`);
  });
};

init();
