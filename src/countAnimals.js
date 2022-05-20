const data = require('../data/zoo_data');

function allAnimals() {
  const all = {};
  data.species.forEach((e) => {
    all[e.name] = e.residents.length;
  });
  return all;
}

function allFromEspecies(specie) {
  const animals = data.species.find((e) => e.name === specie);
  return animals.residents.length;
}

function allFromSpeciesAndSex(values) {
  let total = 0;
  const animals = data.species.find((e) => e.name === values[0]);
  animals.residents.forEach((e) => {
    if (e.sex === values[1]) {
      total += 1;
    }
  });
  return total;
}

function countAnimals(animal) {
  if (!animal) return allAnimals();
  const values = Object.values(animal);
  return values.length === 1 ? allFromEspecies(values[0]) : allFromSpeciesAndSex(values);
}

module.exports = countAnimals;
