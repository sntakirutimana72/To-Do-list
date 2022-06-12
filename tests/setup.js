import { Dom } from '../src/modules/selectors.js';
import { onready } from '../src/modules/main.js';
import { TManager, dataKey } from '../src/modules/storage.js';

document.body.innerHTML = `
  <section class="d-flex-column">
    <div>
      <form action="#" class="to-do-add-form">
        <div class="d-flex-align-center heading-wrapper row">
          <h1 class="to-do-heading no-spacing">Today's To Do</h1>
          <button type="button" class="to-do-refresh-btn">
            <i class="fa-solid fa-rotate"></i>
          </button>
        </div>
        <div class="d-flex-align-center field-wrap row">
          <input type="text" name="desc" placeholder="Add to your list.." required>
          <span>&#9166;</span>
        </div>
      </form>
      <ul class="d-flex-column to-do-list no-spacing"></ul>
      <button type="button" class="to-do-clear-btn" disabled>Clear all completed</button>
    </div>
  </section>
`;

export const dispatch = (event, scope = window) => {
  scope.dispatchEvent(new Event(event));
};

export const setup = () => {
  window.addEventListener('DOMContentLoaded', onready);
  dispatch('DOMContentLoaded');
};

export const teardown = () => {
  TManager.tasks = [];
  localStorage.removeItem(dataKey);
  Dom.listView.innerHTML = '';
};

export const newDummyTask = (index, description, state = false) => {
  return {
    index,
    description,
    completed: state,
  };
};

export const TASK_DUMMIES = [
  {
    index: 0,
    description: 'task 1',
    Completed: false,
  },
  {
    index: 1,
    description: 'task 2',
    Completed: false,
  },
  {
    index: 2,
    description: 'task ',
    Completed: true,
  },
  {
    index: 3,
    description: 'task 4',
    Completed: false,
  },
  {
    index: 4,
    description: 'task 5',
    Completed: false,
  },
];

export class TestCase {

  static createTask(description = '', expectedLength = 0) {
    Dom.descInput.value = description;

    dispatch('submit', document.forms[0]);

    expect(Dom.listView.children).toHaveLength(expectedLength);
    expect(TManager.tasks).toHaveLength(expectedLength);
  }
}
