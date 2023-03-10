const express = require('express');
require('dotenv').config(); // Load file .env --> dotenv.config()
const { graphqlHTTP } = require('express-graphql');
const colors = require('colors');
const cors = require('cors');

const schema = require('./schema/schema');
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;

const app = express();

//Connect DB
connectDB();
app.use(cors());
app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development',
}))

app.listen(port, console.log(`Server running on port: ${port}`))
