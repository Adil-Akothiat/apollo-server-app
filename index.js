const { ApolloServer } = require('apollo-server');
const UserAPI = require('./dataSource/users');
const resolvers = require('./resolvers');
const typeDefs = require('./schema');

const port  = process.env.PORT || 5000;
const dataSources = ()=> ({
    userAPI: new UserAPI
});
const server = new ApolloServer({typeDefs, resolvers, dataSources});

server.listen({port: port}).then(({url})=> console.log('server running...'));