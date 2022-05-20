const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return !employeeName
    ? {}
    : data.employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
}

module.exports = getEmployeeByName;
