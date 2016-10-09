var dogs = require('./dogs.js'),
  cats = require('./cats.js'),
  animals = [].concat(dogs, cats);

module.exports = animals;