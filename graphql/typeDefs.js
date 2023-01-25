const gql = require('graphql-tag')

//Using ! we require type format to be exactly the same
const typeDefs = gql`
type Post {
    id: ID!
    body: String!
    username: String!
    createdAt: String!
}
 type Query{
    getPosts: [Post]
 }
`

module.exports = typeDefs;