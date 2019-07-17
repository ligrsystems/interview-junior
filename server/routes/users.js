const { Router } = require('express');
const uuid = require('uuid');
const db = require('../database');

const usersRoute = Router();
module.exports = usersRoute;


usersRoute.get('/users', async (req, res) => {
  const users = db.get('users')
    .value();

  res.json(users);
});


usersRoute.post('/users', async (req, res) => {
  const user = {
    id: uuid.v4(),
  };

  db.get('users')
    .push(user)
    .write();

  res.json(user);
});


// TODO: Get individual user
usersRoute.get('/users/id', async (req, res) => {
});
