const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const people = { child: 0, adult: 0, senior: 0 };

  entrants.forEach((element) => {
    if (element.age >= 50) people.senior += 1;
    if (element.age >= 18 && element.age < 50) people.adult += 1;
    if (element.age < 18) people.child += 1;
  });

  return people;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const { child, adult, senior } = data.prices;
  const people = countEntrants(entrants);

  return ((people.child * child) + (people.adult * adult) + (people.senior * senior));
}

module.exports = { calculateEntry, countEntrants };
