const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const isAuth = require('./middleware/is-auth');

const schema = require('./graphql/schema/schema');
const resolvers = require('./graphql/resolvers/resolvers');

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

app.use(isAuth);

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
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
