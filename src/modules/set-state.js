import { TManager, commitTasks } from './storage.js';

const setState = ({ parentElement }) => {
  parentElement.classList.toggle('status-completed');

  TManager.setState(parseInt(parentElement.id, 10));

  commitTasks();
};

export default setState;
