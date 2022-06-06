import { TManager, commitTasks } from './storage.js';
import propClearTaskTrigger from './actions.js';

const setTaskState = ({ parentElement }) => {
  parentElement.classList.toggle('status-completed');

  TManager.setState(parseInt(parentElement.id, 10));

  propClearTaskTrigger(TManager.hasDisabled);

  commitTasks();
};

export default setTaskState;
