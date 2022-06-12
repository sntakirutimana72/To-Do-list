const dataKey = 'to-do-list';

class TasksManager {
  constructor() {
    this._allTasks = [];
  }

  get tasks() {
    return this._allTasks;
  }

  get size() {
    return this._allTasks.length;
  }

  set tasks(tasks) {
    this._allTasks = tasks;

    return this;
  }

  assign(task) {
    this._allTasks.push(task);

    return this;
  }

  setDescription(index, description) {
    this._allTasks[parseInt(index, 10)].description = description;

    return this;
  }

  setState(index) {
    const state = this._allTasks[index].completed;
    this._allTasks[index].completed = !state;

    return this;
  }

  get hasDisabled() {
    return this._allTasks.find(({ completed }) => completed === true) !== undefined;
  }

  setIndex(index) {
    this._allTasks[index].index = index;

    return this;
  }

  setShadow(index) {
    delete this._allTasks[parseInt(index, 10)];

    return this;
  }

  filter() {
    this._allTasks = this._allTasks.filter((task) => task !== undefined);

    return this;
  }

  remove(index) {
    this._allTasks.splice(index, 1);

    return this;
  }
}

export const TManager = new TasksManager();

export const queryTasks = () => {
  const temp = localStorage.getItem(dataKey);

  if (temp !== null) TManager.tasks = JSON.parse(temp);
};

export const commitTasks = () => localStorage.setItem(dataKey, JSON.stringify(TManager.tasks));
