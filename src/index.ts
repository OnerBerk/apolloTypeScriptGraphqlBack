const {typeDefs} = require('./graphQl/schema/typeDefs');
const {bookResolver} = require('./graphQl/resolver/index');

const {ApolloServer} = require('apollo-server');
const dbConnect = require("./config/config.database");
import * as dotenv from 'dotenv';

dotenv.config();
dbConnect();

const server = new ApolloServer({
    typeDefs,
    bookResolver
});

// @ts-ignore
server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});
