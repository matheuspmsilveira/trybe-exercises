const { describe, test, it, expect } = require('@jest/globals');
const { getUserName, users } = require('../src/exercise2and3');

describe('Testando getUserName', () => {
  it('Retorna nome correto', async () => {
    const userName = await getUserName(1);
    expect(userName).toEqual('Mark');
  });

  it('Testando o retorno do erro', async () => {
    expect.assertions(1);
    try {
      await getUserName(3);
    } catch (error) {
      expect(error).toEqual(new Error(`User with 3 not found.`));
    }
  });
});
