const data = require('../data/zoo_data');

function isManager(id) {
  const result = data.employees.filter((e) => e.managers.find((el) => el === id));
  return result.length !== 0;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const names = [];
  const persons = data.employees.filter((e) => e.managers.find((el) => el === managerId));

  persons.forEach((e) => {
    names.push(`${e.firstName} ${e.lastName}`);
  });

  return names;
}

module.exports = { isManager, getRelatedEmployees };
