class ToDoListManager {
  dataFinder = 'to-do-list';

  constructor() {
    this.tasks = [];

    this.queryTasks();
  }

  queryTasks() {
    const tempList = localStorage.getItem(this.dataFinder);
    if (tempList !== null) this.tasks = JSON.parse(tempList);
  }

  commitTasks() {
    localStorage.setItem(this.dataFinder, JSON.stringify(this.tasks));
  }

  get listView() {
    return document.body.querySelector('.to-do-list');
  }

  render({ index, description, completed }) {
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
  }

  create(description) {
    const obj = {
      index: this.tasks.length,
      description: description,
      completed: false,
    };

    this.tasks.push(obj);
    this.listView.appendChild(this.render(obj));

    this.commitTasks();
  }

  update(uid, desc) {
    this.tasks[parseInt(uid, 10)].description = desc;

    this.commitTasks();
  }

  remove(component) {
    let index = 0;

    if (component === undefined) {
      this.listView.querySelectorAll(':checked').forEach(({parentElement}) => {
        delete this.tasks[parseInt(parentElement.id, 10)];
        this.listView.removeChild(parentElement);
      });
      this.tasks = this.tasks.filter((obj) => obj !== undefined);
    } else {
      index = parseInt(component.id, 10);

      this.tasks.splice(index, 1);
      this.listView.removeChild(component);
    }

    for (index; index < this.tasks.length; index++) {
      this.tasks[index].index = index;
      this.listView.children[index].id = index;
    }

    this.commitTasks();
  }

  setState({ parentElement }) {
    parentElement.classList.toggle('status-completed');

    const uid = parseInt(parentElement.id, 10);

    this.tasks[uid].completed = !this.tasks[uid].completed;
    this.commitTasks();
  }

  populate() {
    return new Promise((resolve, rej) => {
      this.tasks.forEach((obj) => {
        this.listView.appendChild(this.render(obj));
      });

      resolve();
    });
  }
};

const toDoListManager = new ToDoListManager();

export function create(evt) {
  evt.preventDefault();

  toDoListManager.create(this.elements.desc.value);

  this.reset();
}

export function populate() {
  return toDoListManager.populate();
}

export const enableEdit = (button) => {
  const component = button.parentElement;

  if (button.classList.contains('fa-ellipsis-vertical')) {
    button.classList.remove('fa-ellipsis-vertical');
    button.classList.add('fa-trash');

    component.children[1].removeAttribute('disabled');
  } else {
    toDoListManager.remove(component);
  }
};

export const disableEdit = (field) => {
  const component = field.parentElement;
  const button = component.children[2];

  button.classList.remove('fa-trash');
  button.classList.add('fa-ellipsis-vertical');

  field.setAttribute('disabled', 'true');

  toDoListManager.update(component.id, field.value);
};

export const setState = (target) => toDoListManager.setState(target);

export const remove = (obj) => toDoListManager.remove(obj);
