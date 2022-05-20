const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((e) => e.name === animal).residents.every((e) => e.age > age);
}

module.exports = getAnimalsOlderThan;
