const data = require('../data/zoo_data');

const getAvailability = (day) => {
  const animals = [];
  data.species.forEach((e) => {
    e.availability.forEach((el) => {
      if (el === day) animals.push(e.name);
    });
  });
  return animals;
};

const getAllSchedule = () => {
  const week = {};
  Object.entries(data.hours).forEach((e) => {
    if (e[0] === 'Monday') {
      week[e[0]] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      week[e[0]] = {
        officeHour: `Open from ${e[1].open}am until ${e[1].close}pm`,
        exhibition: getAvailability(e[0]),
      };
    }
  });
  return week;
};

const getAnimalSchedule = (animal) => {
  const info = data.species.find((e) => e.name === animal);
  return info ? info.availability : undefined;
};

function getSchedule(scheduleTarget) {
  const day = getAllSchedule()[scheduleTarget];
  const animal = getAnimalSchedule(scheduleTarget);
  if (!scheduleTarget || (!day && !animal)) return getAllSchedule();
  if (animal) return animal;
  return { [scheduleTarget]: getAllSchedule()[scheduleTarget] };
}

module.exports = getSchedule;
