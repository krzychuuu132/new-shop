const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const User = require('./models/user');

require('dotenv').config();

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

// Construct a schema, using GraphQL schema language
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

  type RootQuery{
    users: [String!]!
  }

  type RootMutation{
    createUser(name:String,surname:String,email:String,password:String) : String
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

  createUser: async (args) => {
    const { name, surname, email, password } = args;
    console.log(name, surname, email, password);

    const newUser = new User({
      name: name,
      surname: surname,
      email: email,
      password: password,
    });

    try {
      const savedUser = await newUser.save();

      return savedUser;
    } catch (err) {
      return new Error(err);
    }
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

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@new-shop.1tmmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, () => {
  console.log('connected to DB!');
  app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
  });
});
