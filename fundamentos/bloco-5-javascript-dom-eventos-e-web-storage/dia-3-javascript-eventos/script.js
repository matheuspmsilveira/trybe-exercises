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
    let holidayDay = holidays[index];
    if (holidayDay.style.backgroundColor === 'yellow') {
      holidayDay.style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holidayDay.style.backgroundColor = 'yellow';
    }
  }
}

const holidayButton = document.querySelector('#btn-holiday');
holidayButton.addEventListener('click', changeHolidayColor);

//Ecercício 4
function createFridayButton(buttonName) {
  const elementFridayButton = document.createElement('button');
  const buttonsContainer = document.querySelector('.buttons-container');
  
  elementFridayButton.innerHTML = buttonName;
  elementFridayButton.id = 'btn-friday';
  buttonsContainer.appendChild(elementFridayButton);
}

createFridayButton('Sexta-feira');

//Exercício 5
function changeFridayText(fridayDays) {
  function fridayText() {
    const fridays = document.querySelectorAll('.friday');
    for (let index = 0; index < fridays.length; index += 1) {
      let fridayDay = fridays[index];
      if (fridayDay.innerText !== 'Sexta-feira') {
        fridayDay.innerText = 'Sexta-feira';
      } else {
        fridayDay.innerHTML = fridayDays[index];
      }
    }
  }
  
  const fridaysButton = document.querySelector('#btn-friday');
  fridaysButton.addEventListener('click', fridayText);
}

let dezFridays = [4, 11, 18, 25]
changeFridayText(dezFridays);

//Exercício 6
function daysZommOn() {
  function daysZoom(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '500';
  }
  
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', daysZoom);
}

daysZommOn();

function daysZoomOut() {
  function daysReset(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  }
  
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', daysReset);
}

daysZoomOut();

//Exercício 7
function createMyTasks(task) {
  let elementSpan = document.createElement('span');
  let spanParent = document.querySelector('.my-tasks');
  
  elementSpan.innerHTML = task;
  spanParent.appendChild(elementSpan);
}

createMyTasks('Cozinhar');

//Exercício 8
function legendAdd(cor) {
  let newDiv = document.createElement('div');
  let divParent = document.querySelector('.my-tasks')
  
  newDiv.style.backgroundColor = cor;
  newDiv.className = 'task';
  divParent.appendChild(newDiv);
}

legendAdd('blue');

//Exercício 9
function selectedTask() {
  let taskSlected = document.querySelectorAll('.task selected');
  let tasks = document.querySelector('.task');
  tasks.addEventListener('click', function taskSelected(event) {
    if (taskSlected.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
}

selectedTask();

// Exercísio 10
function taskDay() {
  let days = document.querySelector('#days');
  let taskSelected = document.getElementsByClassName('task selected');
  let divTask = document.querySelector('.task');
  let taskBackgroudColor = divTask.style.backgroundColor;

  days.addEventListener('click', function(event) {
    let dayColor = event.target.style.color;
    if (taskSelected.length > 0 && dayColor !== taskBackgroudColor) {
      let eventColor = taskSelected[0].style.backgroundColor;
      event.target.style.color = eventColor;
    } else if (dayColor === taskBackgroudColor && taskSelected.length !== 0){
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
}

taskDay();
