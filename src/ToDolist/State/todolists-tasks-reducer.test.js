import { addTodolistAC, todoListsReducer } from './todolists-reducer';
import { tasksReducer } from './tasks-reducer';

test('ids should be equals', () => {
  const startTasksState = {};
  const startToDoListsState = [];

  const action = addTodolistAC('new todolist');

  const endTasksState = tasksReducer(startTasksState, action);
  const endToDoListsState = todoListsReducer(startToDoListsState, action);

  const keys = Object.keys(endTasksState);
  const idFormTasks = keys[0];
  const idFormToDoLists = endToDoListsState[0].id;

  expect(idFormTasks).toBe(action.todolistId);
  expect(idFormToDoLists).toBe(action.todolistId);
});
