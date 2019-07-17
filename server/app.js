const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { setupDatabase } = require('./database');
const usersRoute = require('./routes/users');


const start = async () => {
  const app = express();

  setupDatabase();
  app.use('/api', usersRoute);
  app.use(express.static(path.resolve(__dirname, '../app')));

  app.listen(9999);
  console.log('App listening at http://localhost:9999');
};


start();
