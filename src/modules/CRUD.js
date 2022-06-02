import { tasks, commitTasks, queryTasks } from './storage.js';
import { $select } from './selectors.js';

const listView = $select('.to-do-list');

const render = ({ index, description, completed }) => {
  const component = document.createElement('li');

  component.id = index;
  component.className = 'row';

  if (completed) component.classList.add('status-completed');

  component.innerHTML = `
    <input type='checkbox'${completed ? ' checked' : ''} class='toggler'>
    <input type='text' class='field-desc' value='${description}' disabled>
    <button type='button' class='rm-btn fa-solid fa-ellipsis-vertical'></button>
  `;

  return component;
};

export function create(evt) {
  evt.preventDefault();

  const obj = {
    index: tasks.length,
    description: this.elements.desc.value,
    completed: false,
  };

  tasks.push(obj);
  listView.appendChild(render(obj));

  commitTasks();

  this.reset();
}

export function populate() {
  return new Promise((resolve, rej) => {
    queryTasks();

    tasks.forEach((obj) => listView.appendChild(render(obj)));

    resolve();
  });
}

export const setDescription = (field) => {
  const obj = field.parentElement;
  const button = obj.children[2];

  button.classList.remove('fa-trash');
  button.classList.add('fa-ellipsis-vertical');

  field.setAttribute('disabled', 'true');

  tasks[parseInt(obj.id, 10)].description = field.value;

  commitTasks();
};

export const remove = (obj) => {
  let index = 0;

  if (obj === undefined) {
    const checked = $select(':checked', true, listView);

    if (!checked.length) return;

    checked.forEach(({ parentElement }) => {
      delete tasks[parseInt(parentElement.id, 10)];

      listView.removeChild(parentElement);
    });

    tasks = tasks.filter((obj) => obj !== undefined);
  } else {
    index = parseInt(obj.id, 10);

    tasks.splice(index, 1);
    listView.removeChild(obj);
  }

  for (index; index < tasks.length; index += 1) {
    tasks[index].index = index;
    listView.children[index].id = index;
  }

  commitTasks();
};

export const enableEdit = (button) => {
  const obj = button.parentElement;

  if (button.classList.contains('fa-ellipsis-vertical')) {
    button.classList.remove('fa-ellipsis-vertical');
    button.classList.add('fa-trash');

    obj.children[1].removeAttribute('disabled');
  } else remove(obj);
};
