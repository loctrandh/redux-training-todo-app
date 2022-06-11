import { TODO_ADD, TODO_DELETE, TODO_TOGGLE } from './types';

export const doAddTodo = todo => ({
  type: TODO_ADD,
  payload: todo,
});

export const doToggleTodo = id => ({
  type: TODO_TOGGLE,
  payload: id,
});

export const doDeleteTodo = id => ({
  type: TODO_DELETE,
  payload: id,
});
