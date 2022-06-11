import {
  TODO_ADD,
  TODO_DELETE,
  TODO_FETCH,
  TODO_FETCH_ERROR,
  TODO_FETCH_SUCCESS,
  TODO_TOGGLE,
} from './types';

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

export const doFetchTodo = () => ({
  type: TODO_FETCH,
});

export const doFetchTodoSuccess = todos => ({
  type: TODO_FETCH_SUCCESS,
  payload: todos,
});

export const doFetchTodoError = error => ({
  type: TODO_FETCH_ERROR,
  payload: error,
});
