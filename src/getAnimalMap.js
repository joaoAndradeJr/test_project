const data = require('../data/zoo_data');

const mapAllAnimals = () => {
  const locations = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((e) => {
    locations[e.location].push(e.name);
  });
  return locations;
};

const searchBySex = (array, sex) => {
  const animals = [];
  array.forEach((e) => {
    if (e.sex === sex) animals.push(e.name);
  });
  return animals;
};

const getNames = (array, sort, sex) => {
  let names = [];
  if (sex) {
    names = searchBySex(array, sex);
  } else {
    array.forEach((e) => {
      names.push(e.name);
    });
  }
  return sort ? names.sort() : names;
};

const getLocationsAndNames = (sort = false, sex = false) => {
  const locationsAndNames = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((e) => {
    const specieName = { [e.name]: getNames(e.residents, sort, sex) };
    locationsAndNames[e.location].push(specieName);
  });
  return locationsAndNames;
};

const getLocationsAndNameAndSex = (sex, sort = false) => {
  const locationsAndNames = getLocationsAndNames(sort, sex);
  return locationsAndNames;
};

function getAnimalMap({
  sex = undefined,
  sorted = undefined,
  includeNames = undefined,
} = {}) {
  if (includeNames && sex) return getLocationsAndNameAndSex(sex, sorted);
  if (includeNames) return getLocationsAndNames(sorted);
  return mapAllAnimals();
}

module.exports = getAnimalMap;
