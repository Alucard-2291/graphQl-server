export const typeDefs = `#graphql
    type Users{
        id: ID!
        name: String!
        phone: String!
        email: String!
        customerType: String!
    }
    type Query{
        users: [Users]
    }
`;
