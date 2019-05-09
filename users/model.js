const db = require('../data/dbConfig.js');

module.exports = {
  get,
  getById,
  getBy,
  add
};

function get() {
  return db('users');
}

function getById(id) {
  return db('users').where({id}).first();
}

function getBy(whereObj) {
  return db('users').where(whereObj);
}

function add(user) {
  return db('users').insert(user).then(([id]) => getById(id));
}
