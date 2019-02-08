// npm install --save apollo-server graphql
/*

+ nodemon@1.18.9
+ apollo-server@2.4.0
+ graphql@14.1.1
+ graphql-tools@4.0.4
+ babel-cli@6.26.0
+ babel-preset-env@1.7.0

https://babeljs.io/setup#installation
*/

const { ApolloServer, gql } = require('apollo-server');
import resolvers from './resolvers/resolvers'

//Some projects use schemas imported from external files
const fs = require('fs');
//gql can also be used as regular function to convert a string to an AST
const typeDefs = gql(fs.readFileSync(__dirname.concat('/schemas/schema.graphql'), 'utf8'))

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});