const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');

const mongoose = require('mongoose');
const User = require('./models/User');

const initialize = require('./passport-config');
initialize(passport);

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
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
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

  type AuthData{
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  type RootQuery{
    users: [String!]!
    login(email:String!,password: String!): String!
  }

  type RootMutation{
    register(name:String,surname:String,email:String,password:String): String
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

  login: () => {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: 'zaloguj',
      failureFlash: true,
    });
  },

  register: async (args) => {
    const { name, surname, email, password } = args;

    try {
      const emailExist = await User.findOne({ email: email });

      if (emailExist) return 'user o takim e-mailu już istnieje';

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        name,
        surname,
        email,
        password: hashedPassword,
      });

      newUser.save((err) => {
        if (err) throw new Error(err);
      });

      return '';
    } catch (err) {
      throw new Error(err);
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

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@new-shop.1tmmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('connected to DB!');
  }
);

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
