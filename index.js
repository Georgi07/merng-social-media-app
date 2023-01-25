const {ApolloServer} = require('apollo-server')
const mongoose = require('mongoose')
const {MONGODB} = require('./config')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./resolvers/index')

// For each graphQl query, mutation or subsrcibtion we have resolver that coresponds with them execute some logic and return result for
const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB,{useNewUrlParser: true})
.then(() => {
    console.log("MongoDB Connected")
   return server.listen({port: 5000})
})
.then(res => {
    console.log(`Server running at ${res.port}`)
})