const {gql} = require('apollo-server');
module.exports = gql`
type Query {
    users: [User]
}
type User {
    id: ID!
    login: String
    avatar_url: String
    url: String
    repos_url: String
}
`;