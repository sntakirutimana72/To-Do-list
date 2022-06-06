const dataKey = 'to-do-list';

class TasksManager {
  allTasks = [];

  get tasks() {
    return this.allTasks;
  }

  get size() {
    return this.allTasks.length;
  }

  set tasks(tasks) {
    this.allTasks = tasks;

    return this;
  }

  assign(task) {
    this.allTasks.push(task);

    return this;
  }

  setDescription(index, description) {
    this.allTasks[parseInt(index, 10)].description = description;

    return this;
  }

  setState(index) {
    const state = this.allTasks[index].completed;
    this.allTasks[index].completed = !state;

    return this;
  }

  get hasDisabled() {
    return this.allTasks.find(({ completed }) => completed === true) !== undefined;
  }

  setIndex(index) {
    this.allTasks[index].index = index;

    return this;
  }

  setShadow(index) {
    delete this.allTasks[parseInt(index, 10)];

    return this;
  }

  filter() {
    this.allTasks = this.allTasks.filter((task) => task !== undefined);

    return this;
  }

  remove(index) {
    this.allTasks.splice(index, 1);

    return this;
  }
}

export const TManager = new TasksManager();

export const queryTasks = () => {
  const temp = localStorage.getItem(dataKey);

  if (temp !== null) TManager.tasks = JSON.parse(temp);
};

export const commitTasks = () => localStorage.setItem(dataKey, JSON.stringify(TManager.tasks));
