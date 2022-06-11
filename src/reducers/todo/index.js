import {
  TODO_ADD,
  TODO_DELETE,
  TODO_FETCH,
  TODO_FETCH_ERROR,
  TODO_FETCH_SUCCESS,
  TODO_TOGGLE,
} from './types';

const INITIAL_STATE = {
  error: null,
  loading: false,
  todos: [],
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TODO_ADD:
      return applyAddTodo(state, action);

    case TODO_TOGGLE:
      return applyToggleTodo(state, action);

    case TODO_DELETE:
      return applyDeleteTodo(state, action);

    case TODO_FETCH:
      return applyFetchTodo(state, action);

    case TODO_FETCH_SUCCESS:
      return applyTodos(state, action);

    case TODO_FETCH_ERROR:
      return applyFetchError(state, action);

    default:
      return state;
  }
}

function applyAddTodo(state, action) {
  return {
    ...state,
    todos: [...state.todos, action.payload],
  };
}

function applyToggleTodo(state, action) {
  return {
    ...state,
    todos: state.todos.map(todo =>
      todo.id !== action.payload
        ? todo
        : { ...todo, completed: !todo.completed }
    ),
  };
}

function applyDeleteTodo(state, action) {
  return {
    ...state,
    todos: state.todos.filter(todo => todo.id !== action.payload),
  };
}

function applyTodos(state, action) {
  return {
    ...state,
    todos: action.payload,
    loading: false,
  };
}

function applyFetchTodo(state, _action) {
  return {
    ...state,
    loading: true,
  };
}

function applyFetchError(state, action) {
  return {
    ...state,
    loading: false,
    error: action.payload,
  };
}

export default reducer;
