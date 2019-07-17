const low = require('lowdb');
const uuid = require('uuid');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

module.exports = db;


module.exports.setupDatabase = () => {
  db
    .defaults({
      users: [{
        id: uuid.v4(),
        firstName: 'Bruce',
        lastName: 'Wayne',
        password: 'batman',
      }],
    })
    .write();
};
