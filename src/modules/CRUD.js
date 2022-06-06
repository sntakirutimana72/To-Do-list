import { TManager, commitTasks, queryTasks } from './storage.js';
import { $select, $selectAll, createElement } from './selectors.js';
import propClearTaskTrigger from './actions.js';

const listView = $select('.to-do-list');

const renderTaskTemplate = ({ index, description, completed }) => {
  const component = createElement('li');

  component.id = index;
  component.classList.add('d-flex-align-center', 'row', 'task-item');

  if (completed) component.classList.add('status-completed');

  component.innerHTML = `
    <input type='checkbox'${completed ? ' checked' : ''} class='task-stat'>
    <input type='text' class='task-desc' placeholder='${description}'>
    <button type='button' class='task-opt task-drag fa-solid fa-ellipsis-vertical'></button>
  `;

  return component;
};

const alterTaskOptionButton = (element) => {
  const [, , button] = element.children;

  if (button.classList.contains('task-drag')) {
    button.classList.remove('task-drag', 'fa-ellipsis-vertical');
    button.classList.add('task-trash', 'fa-trash');
  } else {
    button.classList.remove('task-trash', 'fa-trash');
    button.classList.add('task-drag', 'fa-ellipsis-vertical');
  }
};

export const onTaskSelect = ({ parentElement }) => {
  const currentSelection = $select('.task-selected', listView);

  if (parentElement === currentSelection) return;

  if (currentSelection !== null) {
    currentSelection.classList.remove('task-selected');
    alterTaskOptionButton(currentSelection);
  }

  parentElement.classList.add('task-selected');
  alterTaskOptionButton(parentElement);
};

export const removeTask = ({ parentElement }) => {
  const index = parseInt(parentElement.id, 10);

  TManager.remove(index);
  listView.removeChild(parentElement);
  reorderTasks(index);

  if (parentElement.children[0].checked & !TManager.hasDisabled) propClearTaskTrigger();
};

export function createNewTask(event) {
  event.preventDefault();

  const newTask = {
    index: TManager.size,
    description: this.elements.desc.value,
    completed: false,
  };

  TManager.assign(newTask);
  listView.appendChild(renderTaskTemplate(newTask));

  commitTasks();

  this.reset();
}

export function populateTasks() {
  return new Promise((resolve, reject) => {
    queryTasks();

    TManager.tasks.forEach((taskObj) => listView.appendChild(renderTaskTemplate(taskObj)));

    if (TManager.hasDisabled) propClearTaskTrigger();

    resolve();
  });
}

export const setTaskDescription = (field) => {
  const { parentElement } = field;

  TManager.setDescription(parentElement.id, field.value);

  field.placeholder = field.value;
  field.value = '';

  commitTasks();
};

const reorderTasks = (index = 0) => {
  for (index; index < TManager.size; index += 1) {
    TManager.setIndex(index);
    listView.children[index].id = index;
  }

  commitTasks();
};

export const removeCompletedTasks = () => {
  $selectAll(':checked', listView).forEach(({ parentElement }) => {
    TManager.setShadow(parentElement.id);
    listView.removeChild(parentElement);
  });

  TManager.filter();
  propClearTaskTrigger();
  reorderTasks();
};
