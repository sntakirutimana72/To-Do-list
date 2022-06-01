import './index.css';

const toDoList = [
  {
    index: '01',
    description: 'Do physical exercises',
    completed: true,
  },
  {
    index: '02',
    description: 'Do the dishes',
    completed: false,
  },
  {
    index: '03',
    description: 'Make breakfast',
    completed: false,
  },
  {
    index: '04',
    description: 'Prepare lunch',
    completed: false,
  },
  {
    index: '05',
    description: 'Go to the bank',
    completed: true,
  },
];

let indexCount = 6;

const toDoListContainer = document.body.querySelector('.to-do-list');

function toggleTaskState({ parentElement: task }) {
  task.classList.toggle('status-completed');
}

function propClearBtn() {
  const clearButton = document.body.querySelector('.to-do-clear-btn');

  if (clearButton.hasAttribute('disabled')) {
    clearButton.removeAttribute('disabled');
  } else clearButton.setAttribute('disabled', 'true');
}

function render({ index, description, completed: state }) {
  const component = document.createElement('li');
  component.id = index;
  component.className = 'row'

  if (state) component.classList.add('status-completed');

  component.innerHTML = `
    <input type='checkbox'${state ? ' checked' : ''}>
    <label>${description}</label>
    <button type='button'><i class='fa-solid fa-ellipsis-vertical'></i></button>
  `;

  return component;
}

function createTask(event) {
  event.preventDefault();

  toDoListContainer.appendChild(render({
    index: indexCount,
    description: this.elements.desc.value,
    completed: false,
  }));

  indexCount += 1;

  this.reset();
}

function populateToDoList() {
  return new Promise((resolve, rej) => {
    toDoList.forEach((task) => {
      toDoListContainer.appendChild( render(task) );
    });

    resolve();
  });
}

window.addEventListener('DOMContentLoaded', () => {
  populateToDoList().then(propClearBtn);

  document.forms[0].addEventListener('submit', createTask);

  document.body.querySelector('.to-do-clear-btn')
    .onclick = () => {
      Array.from(toDoListContainer.children).forEach((task) => {
        if (task.children[0].checked) toDoListContainer.removeChild(task);
      });
  };

  document.body.addEventListener('click', ({ target }) => {
    if (target.tagName === 'INPUT' && target.type === 'checkbox') {
      toggleTaskState(target);
    }
  });
});
