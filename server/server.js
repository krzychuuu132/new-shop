const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }

  type RootQuery{
    users: [String!]!
  }

  type RootMutation{
    createUser(name:String,surnamame:String,login:String,password:String) : String
  }

  schema{
    query: RootQuery
    mutation: RootMutation
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
  users: () => {
    return ['krzysiek', 'damian', 'filip'];
  },

  createUser: (args) => {
    return args.name;
  },
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.nbgpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, () => {
  console.log('connected to DB!');
});

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
