import './node_modules/just-validate/dist/js/just-validate.js';

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

const clearButton = document.querySelector('#clear-button');

clearButton.addEventListener('click', function () {
  const inputs = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < inputs.length; index += 1) {
    let inputElement = inputs[index];
    inputElement.value = '';
    textArea.value = '';
  }
});

new window.JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 40
    },
    email: {
      required: true,
      email: true,
      maxLength: 50
    },
    cpf: {
      required: true,
      maxLength: 11
    },
    address: {
      required: true,
      maxLength: 200
    },
    city: {
      required: true,
      maxLength: 28
    },
    state: {
      required: true,
    },
    radio: {
      required: true,
    },
    textarea: {
      required: true,
      maxLength: 1000
    },
    position: {
      required: true,
      maxLength: 40
    },
    description: {
      required: true,
      maxLength: 500
    },
    date: {
      required: true,
    }
  },
  messages: {
    name: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.'
    },
    email: {
      required: 'Este campo é obrigatório.',
      email: 'O email digitado não é válido.',
      maxLength: 'O limite é de 50 caracteres.'
    },
    cpf: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 11 caracteres.'
    },
    address: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 200 caracteres.'
    },
    city: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 28 caracteres.'
    },
    state: {
      required: 'Este campo é obrigatório.',
    },
    radio: {
      required: 'Este campo é obrigatório.',
    },
    textarea: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 1000 caracteres.'
    },
    position: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.'
    },
    description: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 500 caracteres.'
    },
    date: {
      required: 'Este campo é obrigatório.',
    }
  }
});
