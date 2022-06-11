import { fetchTodos } from 'apis';
import { doFetchTodoError, doFetchTodoSuccess } from 'reducers/todo/actions';
import { TODO_FETCH } from 'reducers/todo/types';
import { call, takeEvery, put } from 'redux-saga/effects';

export function* handleFetchTodos() {
  try {
    const response = yield call(fetchTodos);
    yield put(doFetchTodoSuccess(response));
  } catch (error) {
    // TODO: dispatch an action to tell store that Api Call is failed
    yield put(doFetchTodoError(error));
  }
}

export function* watchTodos() {
  yield takeEvery(TODO_FETCH, handleFetchTodos);
}
