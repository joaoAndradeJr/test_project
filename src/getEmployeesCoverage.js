const data = require('../data/zoo_data');

function getAnimalsNameAndLocationById(array) {
  const animals = [];
  const locations = [];
  array.forEach((e) => {
    const animal = data.species.find((el) => el.id === e);
    animals.push(animal.name);
    locations.push(animal.location);
  });
  return { animals, locations };
}

function getAllEmployees() {
  const employees = [];

  data.employees.forEach((e) => {
    employees.push({
      id: e.id,
      fullName: `${e.firstName} ${e.lastName}`,
      species: getAnimalsNameAndLocationById(e.responsibleFor).animals,
      locations: getAnimalsNameAndLocationById(e.responsibleFor).locations,
    });
  });
  return employees;
}

function getFromName({ name = undefined, id = undefined }) {
  let employeeId = '';
  if (name) {
    data.employees.forEach((e) => {
      if (e.firstName === name || e.lastName === name) { employeeId = e.id; }
    });
    return employeeId;
  }
  return id;
}

function getEmployeesCoverage(employee) {
  if (!employee) return getAllEmployees();
  const id = getFromName(employee);
  const employees = getAllEmployees();
  const getEmployee = employees.find((e) => e.id === id);
  if (!getEmployee) throw new Error('Informações inválidas');
  return getEmployee;
}

module.exports = getEmployeesCoverage;
