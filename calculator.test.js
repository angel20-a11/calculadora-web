const { calculate } = require('./script.js');

test('Suma simple', () => {
  expect(calculate('2+3')).toBe(5);
});
test('Multiplicación', () => {
  expect(calculate('4*5')).toBe(20);
});
test('División con decimales', () => {
  expect(calculate('10/4')).toBeCloseTo(2.5);
});
test('Operación inválida', () => {
  expect(() => calculate('5+')).toThrow();
});