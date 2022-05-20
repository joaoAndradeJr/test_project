const getOpeningHours = require('../src/getOpeningHours');

const noParamReturn = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

const closedZoo = 'The zoo is closed';
const openZoo = 'The zoo is open';
const invalidDayName = 'The day must be valid. Example: Monday';
const abbreviationError = 'The abbreviation must be \'AM\' or \'PM\'';
const wrongHourFormat = 'The hour should represent a number';
const wrongMinuteFormat = 'The minutes should represent a number';
const worngHour = 'The hour must be between 0 and 12';
const wrongMinnute = 'The minutes must be between 0 and 59';

describe('Testes da função getOpeningHours', () => {
  it('Retornar a string \'The zoo is closed\'', () => {
    const actual = getOpeningHours();
    expect(actual).toStrictEqual(noParamReturn);
  });
  it('Deve retornar a string \'The zoo is closed\'', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    expect(actual).toBe(closedZoo);
  });
  it('Deve retornar a string \'The zoo is open\'', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    expect(actual).toBe(openZoo);
  });
  it('Deve retornar a string \'The zoo is closed\'', () => {
    const actual = getOpeningHours('Wednesday', '09:00-AM');
    expect(actual).toBe(openZoo);
  });
});

describe('Testes de erros da função getOpeningHours', () => {
  it('Deve retornar uma exceção', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(invalidDayName);
  });
  it('Deve retornar uma exceção', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(abbreviationError);
  });
  it('Retornar uma exceção', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(wrongHourFormat);
  });
  it('Retornar uma exceção', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow(wrongMinuteFormat);
  });
  it('Retorna uma exceção', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow(worngHour);
  });
  it('Retorna uma exceção', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow(wrongMinnute);
  });
});

// describe('Mais testes da função getOpeningHours', () => {
// });
