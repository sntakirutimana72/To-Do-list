import { tasks, commitTasks } from "./storage.js";

export const setState = ({ parentElement }) => {
  parentElement.classList.toggle('status-completed');

  const uid = parseInt(parentElement.id, 10);
  tasks[uid].completed = !tasks[uid].completed;

  commitTasks();
};
