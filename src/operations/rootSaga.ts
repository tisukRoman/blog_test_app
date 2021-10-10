import { fork } from 'redux-saga/effects';
import { postsWatcher } from './postOperations';

export function* rootSaga() {
  yield fork(postsWatcher);
}
