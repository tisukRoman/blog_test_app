import { fork } from 'redux-saga/effects';
import { commentWatcher } from './commentOperations';
import { postsWatcher } from './postOperations';

export function* rootSaga() {
  yield fork(postsWatcher);
  yield fork(commentWatcher);
}
