const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema/typedef');
const { resolvers } = require('./schema/resolvers');


const app = new ApolloServer({ typeDefs, resolvers });


app.listen().then(({ url }) =>{
    console.log(`Api is running in:  ${url}`);
})