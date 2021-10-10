import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  GET_ALL_POSTS_FAIL,
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
} from '../constants/postConstants';

const baseURL = 'https://bloggy-api.herokuapp.com/';

function* getAllPostsWorker() {
  try {
    debugger
    const { data } = yield call(axios.get, `${baseURL}posts`);
    yield put({ type: GET_ALL_POSTS_SUCCESS, payload: data });
  } catch (error: any) {
    yield put({ type: GET_ALL_POSTS_FAIL, payload: error.message });
  }
}

export function* postsWatcher() {
  yield takeEvery(GET_ALL_POSTS_REQUEST, getAllPostsWorker);
}
