const INITIAL_STATE = [
  { id: 1, content: 'Redux Testing', completed: false },
  { id: 2, content: 'React Redux', completed: false },
  { id: 3, content: 'Redux Middleware', completed: false },
  { id: 4, content: 'Redux Toolkit', completed: false },
];

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TODO_ADD':
      return applyAddTodo(state, action);

    case 'TODO_TOGGLE':
      return applyToggleTodo(state, action);

    case 'TODO_DELETE':
      return applyDeleteTodo(state, action);

    default:
      return state;
  }
}

function applyAddTodo(state, action) {
  return [...state, action.payload];
}

function applyToggleTodo(state, action) {
  return state.map(todo =>
    todo.id !== action.payload ? todo : { ...todo, completed: !todo.completed }
  );
}

function applyDeleteTodo(state, action) {
  return state.filter(todo => todo.id !== action.payload);
}

export default reducer;
