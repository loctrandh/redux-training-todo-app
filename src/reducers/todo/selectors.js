export const getTodosList = ({ todoState }) =>
  todoState.filter(todo => !todo.completed);

export const getCompletedList = ({ todoState }) =>
  todoState.filter(todo => todo.completed);
