const { describe, test, it, expect } = require('@jest/globals');
const { uppercase } = require('../src/exercise1');

describe('Testando Uppercase', () => {
  test('Retorna string toda em com letras maiusculas', (done) => {
    uppercase('matheus', function callback(str) {
      try {
        done();
        expect(str).toBe('MATHEUS');
      } catch (error) {
        done(error);
      }
    });
  });
});
