/**
 * @jest-environment jsdom
 */
import {
  TASK_DUMMIES, setup, teardown, TestCase,
} from './unittest.js';
import { TManager } from '../src/modules/storage.js';
import { Dom } from '../src/modules/selectors.js';

beforeAll(() => setup());

afterEach(() => teardown());

describe('Mark Status', () => {
  test('As completed', () => {
    TestCase.createTask(TASK_DUMMIES[0].description, 1);

    const { firstChild: element } = Dom.listView;
    const [checkbox] = element.children;
    checkbox.click();
    expect(checkbox.checked).toBeTruthy();
    expect(element.classList.contains('status-completed')).toBeTruthy();
    expect(TManager.tasks[0].completed).toBeTruthy();
  });

  test('As pending', () => {
    TestCase.createTask(TASK_DUMMIES[0].description, 1);

    const { firstChild: element } = Dom.listView;
    const [checkbox] = element.children;
    checkbox.click();
    expect(checkbox.checked).toBeTruthy();
    checkbox.click();
    expect(checkbox.checked).toBeFalsy();
    expect(element.classList.contains('status-completed')).toBeFalsy();
    expect(TManager.tasks[0].completed).toBeFalsy();
  });
});
