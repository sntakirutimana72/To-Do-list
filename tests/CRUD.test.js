/**
 * @jest-environment jsdom
 */
import {
  TASK_DUMMIES, setup, teardown, TestCase,
} from './setup.js';
import { TManager } from '../src/modules/storage.js';
import { Dom } from '../src/modules/selectors.js';

beforeAll(() => setup());

afterEach(() => teardown());

describe('Create a new task', () => {
  test('with empty description', () => TestCase.createTask());

  test('with only space characters', () => TestCase.createTask('  '));

  test('with valid description', () => {
    TestCase.createTask(TASK_DUMMIES[0].description, 1);

    const listView = Dom.listView;

    expect(listView.children).toHaveLength(1);
    expect(listView.firstChild.firstChild.checked).toBeFalsy();
    expect(listView.firstChild.children[1].placeholder).toBe(TASK_DUMMIES[0].description)
    expect(TManager.tasks).toHaveLength(1);
  });
});

// describe('Update task description', () => {});

// describe('Set task status', () => {});
