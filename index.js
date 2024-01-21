import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import db from "./_db.js";
//types
import { typeDefs } from "./schema.js";

//resolver
const resolvers = {
  Query: {
    users() {
      return db.users;
    },
  },
};

//server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("server ready at port", 4000);

