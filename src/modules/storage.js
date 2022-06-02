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
  }

  assign(task) {
    this.allTasks.push(task);
  }

  setDescription(index, desc) {
    this.allTasks[parseInt(index, 10)].description = desc;
  }

  setState(index) {
    const state = this.allTasks[index].completed;
    this.allTasks[index].completed = !state;
  }

  setIndex(index) {
    this.allTasks[index].index = index;
  }

  setShadow(index) {
    delete this.allTasks[parseInt(index, 10)];
  }

  filter() {
    const unfiltered = [...this.allTasks];
    this.allTasks = unfiltered.filter((task) => task !== undefined);
  }

  remove(index) {
    this.allTasks.splice(index, 1);
  }
}

export const TManager = new TasksManager();

export const queryTasks = () => {
  const temp = localStorage.getItem(dataKey);

  if (temp) TManager.tasks = JSON.parse(temp);
};

export const commitTasks = () => localStorage.setItem(dataKey, JSON.stringify(TManager.tasks));
