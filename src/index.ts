import * as dotenv from 'dotenv';
const {ApolloServer} = require('apollo-server');

const {userTypeDefs} = require('./graphQl/schema/index');
const resolver = require('./graphQl/resolver/index');

const dbConnect = require("./config/config.database");

dotenv.config();
dbConnect();

const server = new ApolloServer({
    cors: {
        origin: '*',
        credentials: true
    },
    typeDefs: userTypeDefs,
    resolvers: resolver.userResolver,
});


server.listen().then(({url}: { url: string }) => {
    console.log(`🚀  Server ready at ${url}`);
});
