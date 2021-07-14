function addStatesOptions () {
  const brazilianStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espirito Santo', 'Goiás', 'Maranhão', 'Mato Grosso do Sul', 'Mato Grosso', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  const stateSelected = document.querySelector('#select-state');
  for (let index = 0; index < brazilianStates.length; index += 1) {
    let element = brazilianStates[index];
    let newState = document.createElement('option');
    newState.innerHTML = element;
    const stateAbbreviation = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MS", "MT", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]
    for (let index2 = 0; index2 < stateAbbreviation.length; index2 += 1) {
      if (index === index2) {
        let abbreviation = stateAbbreviation[index];
        newState.value = abbreviation;
      }
    }
    stateSelected.appendChild(newState);
  }
}
addStatesOptions();
