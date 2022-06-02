const dataKey = 'to-do-list';

export let tasks = [];

export const queryTasks = () => {
  const temp = localStorage.getItem(dataKey);

  if (temp) tasks = JSON.parse(temp);
};

export const commitTasks = () => localStorage.setItem(dataKey, JSON.stringify(tasks));
