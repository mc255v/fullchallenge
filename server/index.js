/**
 ********************************DEPENDENCIES********************************
 ****************************************************************************
 */

const config = require('./config');
// initialize a connection to the database
const knex = require('knex')(config.db);
// pass database to submodules
const models = require('./models')(knex);
const apiRouter = require('./controllers')(models);
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

/**
 ********************************SERVER SETUP********************************
 ****************************************************************************
 */

// headers for incoming requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,PUT,POST,DELETE,OPTIONS,PATCH',
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, authorization',
  );
  next();
});

// parse request bodies as json
app.use(bodyParser.json({ type: 'application/json', limit: '50mb' }));

// if the requests begin with '/api', hand them off to the API router
app.use('/api', apiRouter);
// otherwise load the client app
app.use(express.static(`${__dirname}/public`));

/**
 ********************************START SERVER********************************
 ****************************************************************************
 */

app.listen(config.express.port, () => {
  console.log(`Server up and listening on port ${config.express.port}`);
});
