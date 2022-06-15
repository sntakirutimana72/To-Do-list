/**
 * @jest-environment jsdom
 */
import {
  TASK_DUMMIES,
  setup,
  teardown,
  dispatch,
  TestCase,
} from './unittest.js';
import { populateTasks } from '../src/modules/CRUD.js';
import { TManager, dataKey } from '../src/modules/storage.js';
import { Dom } from '../src/modules/selectors.js';

beforeAll(() => setup());

afterEach(() => teardown());

describe('Create New', () => {
  test('With empty description', () => TestCase.createTask());

  test('With only space characters', () => TestCase.createTask('  '));

  test('With valid description', () => {
    TestCase.createTask(TASK_DUMMIES[0].description, 1);

    const listView = Dom.listView;

    expect(listView.children).toHaveLength(1);
    expect(listView.firstChild.firstChild.checked).toBeFalsy();
    expect(listView.firstChild.children[1].placeholder).toBe(TASK_DUMMIES[0].description)
    expect(TManager.tasks).toHaveLength(1);
  });
});

describe('Change Description', () => {
  test('With description', () => {
    TestCase.createTask(TASK_DUMMIES[0].description, 1);

    const { firstChild: element } = Dom.listView;
    const [, descInput] = element.children;
    descInput.value = TASK_DUMMIES[1].description;

    dispatch('change', descInput, {bubbles: true});

    expect(descInput.value).toHaveLength(0);
    expect(descInput.placeholder).toBe(TASK_DUMMIES[1].description);
    expect(TManager.tasks[0].description).toBe(descInput.placeholder);
  });
});

describe('Remove Task', () => {
  test('All completed', () => {
    TASK_DUMMIES.forEach(({description}, k) => TestCase.createTask(description, ++k));

    const listView = Dom.listView;

    expect(TManager.tasks).toHaveLength(TASK_DUMMIES.length);
    expect(listView.children).toHaveLength(TASK_DUMMIES.length);

    [0, 2, 3].forEach((index) => listView.children[index].children[0].click());
    Dom.clearCompletedBtn.click();

    expect(TManager.tasks).toHaveLength(TASK_DUMMIES.length - 3);
    expect(listView.children).toHaveLength(TASK_DUMMIES.length - 3);

    TManager.tasks.forEach(({completed, index, description}, l) => {
      expect(completed).toBeFalsy();
      expect(index).toBe(l);
      expect(listView.children[index].id).toBe(`${index}`);
      expect(listView.children[index].children[1].placeholder).toBe(description);
    });
  });
  test('Only individual', () => {
    TASK_DUMMIES.slice(0, 3).forEach(({description}, k) => TestCase.createTask(description, ++k));

    const listView = Dom.listView;

    expect(TManager.tasks).toHaveLength(3);
    expect(listView.children).toHaveLength(3);

    const [, secondChild] = listView.children;
    secondChild.children[0].click();
    secondChild.children[2].click();

    expect(TManager.tasks).toHaveLength(2);
    expect(listView.children).toHaveLength(2);

    TManager.tasks.forEach(({completed, index, description}, l) => {
      expect(completed).toBeFalsy();
      expect(index).toBe(l);
      expect(listView.children[index].id).toBe(`${index}`);
      expect(listView.children[index].children[1].placeholder).toBe(description);
    });
  });
});

describe('Populate Tasks', () => {
  test('After DOM has loaded', async () => {
    expect(Dom.listView.children).toHaveLength(0);

    const TEMP = [...TASK_DUMMIES];
    TEMP[1].completed = true;
    TEMP[2].completed = true;
    localStorage.setItem(dataKey, JSON.stringify(TEMP));

    await populateTasks();

    expect(Dom.listView.children).toHaveLength(TEMP.length);
    expect(TManager.tasks).toHaveLength(TEMP.length);
    expect(Dom.listView.children[1].children[0].checked).toBeTruthy();
  });
});

describe('Select Task', () => {
  test('by clicking description input field', () => {
    TASK_DUMMIES.slice(0, 2).forEach(
      ({description}, j) => TestCase.createTask(description, ++j)
    );
    const [firstChild, secondChild] = Dom.listView.children;
    firstChild.children[1].click();
    expect(firstChild.classList.contains('task-selected')).toBeTruthy();
    dispatch('click', secondChild, {bubbles: true});
    expect(firstChild.classList.contains('task-selected')).toBeFalsy();
    expect(secondChild.classList.contains('task-selected')).toBeTruthy();
  });
});
