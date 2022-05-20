const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Deve retornar a string Parâmetro inválido, é necessário uma string', () => {
    const actual = handlerElephants({});
    expect(actual).toEqual('Parâmetro inválido, é necessário uma string');
  });
  test('Deve retornar o número inteiro 4', () => {
    const actual = handlerElephants('count');
    expect(actual).toEqual(4);
  });
  test('Deve retornar um array de nomes que possui o nome Jefferson', () => {
    const actual = handlerElephants('names');
    expect(actual).toContain('Jefferson');
  });
  test('Deve retornar um número próximo a 10.5', () => {
    const actual = handlerElephants('averageAge');
    expect(actual).toBeCloseTo(10.5);
  });
});

describe('Mais testes na função HandlerElephants', () => {
  test('Deve retornar undefined se não passar parâmetro', () => {
    const actual = handlerElephants();
    expect(actual).toBeUndefined();
  });
  test('Deve retornar a string NW', () => {
    const actual = handlerElephants('location');
    expect(actual).toEqual('NW');
  });
  test('Deve retornar null', () => {
    const actual = handlerElephants('qualquer-coisa');
    expect(actual).toBeNull();
  });
  test('Deve retornar um número igual ou maior a 5', () => {
    const actual = handlerElephants('popularity');
    expect(actual).toBeGreaterThanOrEqual(5);
  });
});

describe('Mais testes na função HandlerElephants', () => {
  test('Deve retornar um array de dias da semana que não contem Monday', () => {
    const actual = handlerElephants('availability');
    expect(actual).not.toContain('Monday');
  });
});
