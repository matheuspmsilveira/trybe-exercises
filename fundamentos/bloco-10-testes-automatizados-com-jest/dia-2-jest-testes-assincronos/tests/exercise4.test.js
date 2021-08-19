const { describe, test, it, expect } = require('@jest/globals');

const getRepos = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.map(({ name }) => name);
};

describe('Testando getRepos', () => {
  it('Possui o repositório sd-01-week4-5-project-todo-list', async () => {
    const repos = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(repos).toContain('sd-01-week4-5-project-todo-list');
  });
});
