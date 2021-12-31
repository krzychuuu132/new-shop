const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const User = require('./models/User');

require('dotenv').config();

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});

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

    console.log(email);

    const emailExist = await User.findOne({ email: email });
    console.log(emailExist);

    if (emailExist) return 'user juz jest';

    return console.log('usera jeszcz enie ma');
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

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@new-shop.1tmmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('connected to DB!');
  }
);

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
