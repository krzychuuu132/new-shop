const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
  }

  type User{
    name: String!
    surname:String!
    email: String!
    password: String!
  }

  type Error{
    type: String!
    message: String!
  }

  type AuthData{
    userId: ID
    token: String
    tokenExpiration: Int
    error: Error
  }

  type ProductImage{
    src:String
  }

  type Category{
    id: ID!
    name: String!
  }

  type Product{
    id: ID!
    price: String!
    name: String!
    description: String!
    short_description: String!
    sale_price: String!
    images:[ProductImage!]
    categories: [Category]
  }


  type RootQuery{
    users: [String!]!
    login(email:String!,password: String!): AuthData!
    products:[Product]
    categories:[Category!]!
  }

  type RootMutation{
    register(name:String,surname:String,email:String,password:String): String
  }

  schema{
    query: RootQuery
    mutation: RootMutation
  }
`);

module.exports = schema;
