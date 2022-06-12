import {
  createNewTask, populateTasks, removeCompletedTasks,
  removeTask, setTaskDescription, onTaskSelect,
} from './CRUD.js';
import setTaskState from './set-state.js';
import { Dom } from './selectors.js';

export const onready = () => {
  populateTasks().then(() => {});

  document.forms[0].onsubmit = createNewTask;

  Dom.clearCompletedBtn.onclick = removeCompletedTasks;

  document.body.addEventListener('click', ({ target }) => {
    if (target.classList.contains('task-trash')) {
      removeTask(target);
    } else if (target.classList.contains('task-desc')) {
      onTaskSelect(target);
    } else if (target.classList.contains('task-item')) {
      onTaskSelect({ parentElement: target });
    }
  });

  document.body.addEventListener('change', ({ target }) => {
    if (target.classList.contains('task-desc')) {
      setTaskDescription(target);
    } else if (target.classList.contains('task-stat')) {
      onTaskSelect(target);
      setTaskState(target);
    }
  });
};
