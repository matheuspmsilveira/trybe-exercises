function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1
function createDaysList() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const daysNumber = dezDaysList[index];
    const daysNumbersList = document.createElement('li');
    daysNumbersList.innerHTML = daysNumber;
    
    daysNumbersList.classList.add('day');
    if (daysNumber === 24 || daysNumber === 31) {
      daysNumbersList.classList.add('holiday');
    } else if (daysNumber === 4 ||  daysNumber === 11 ||  daysNumber === 18) {
      daysNumbersList.classList.add('friday');
    } else if (daysNumber === 25) {
      daysNumbersList.classList.add('holiday', 'friday');
    }

    daysList.appendChild(daysNumbersList);
  }
}

createDaysList();

//Exercício 2
function createHolidayButton(buttonName) {
  const elementButton = document.createElement('button');
  const buttonsContainer = document.querySelector('.buttons-container');
  
  elementButton.innerHTML = buttonName;
  elementButton.id = 'btn-holiday';
  buttonsContainer.appendChild(elementButton);
}

createHolidayButton('Feriados');

//Exercício 3
function changeHolidayColor() {
  const holidays = document.querySelectorAll('.holiday');
  for (let index = 0; index < holidays.length; index += 1) {
    const holidayDay = holidays[index];
    if (holidayDay.style.backgroundColor === 'yellow') {
      holidayDay.style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holidayDay.style.backgroundColor = 'yellow';
    }
  }
}

const holidayButton = document.querySelector('#btn-holiday');
holidayButton.addEventListener('click', changeHolidayColor);
