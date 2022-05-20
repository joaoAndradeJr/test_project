const data = require('../data/zoo_data');

function getSpeciesIds(managerId) {
  const species = data.employees.find((e) => e.id === managerId);
  return species.responsibleFor[0];
}

function getOldestFromFirstSpecies(id) {
  const speceisId = getSpeciesIds(id);
  const result = data.species.find((e) => e.id === speceisId).residents;
  let oldest = result[0];

  result.forEach((animal) => {
    if (animal.age > oldest.age) oldest = animal;
  });

  return [oldest.name, oldest.sex, oldest.age];
}

module.exports = getOldestFromFirstSpecies;
