function addStatesOptions () {
  const brazilianStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espirito Santo', 'Goiás', 'Maranhão', 'Mato Grosso do Sul', 'Mato Grosso', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  const stateSelected = document.querySelector('#select-state');
  for (let index = 0; index < brazilianStates.length; index += 1) {
    let element = brazilianStates[index];
    let newState = document.createElement('option');
    newState.innerHTML = element;
    stateSelected.appendChild(newState);
  }
}
addStatesOptions();
