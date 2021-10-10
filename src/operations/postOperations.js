import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  CREATE_POST_FAIL,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  DELETE_POST_FAIL,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  GET_ALL_POSTS_FAIL,
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
  GET_POST_DETAILS_FAIL,
  GET_POST_DETAILS_REQUEST,
  GET_POST_DETAILS_SUCCESS,
  UPDATE_POST_FAIL,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
} from '../constants/postConstants';


const postsURL = 'https://bloggy-api.herokuapp.com/posts/';

const config = {
  headers: {
    'Content-Type': 'application/json',
  }
}

function* getAllPostsWorker() {
  try {
    const { data } = yield call(axios.get, `${postsURL}`);
    yield put({ type: GET_ALL_POSTS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: GET_ALL_POSTS_FAIL, payload: error.message });
  }
}

function* getPostDetailsWorker({ postId }) {
  try {
    const { data } = yield call(axios.get, `${postsURL}${postId}?_embed=comments`);
    yield put({ type: GET_POST_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: GET_POST_DETAILS_FAIL, payload: error.message });
  }
}

function* createPostWorker({ title, body }) {
  try {
    yield call(axios.post, `${postsURL}`, { title, body }, config);
    yield put({ type: CREATE_POST_SUCCESS });
  } catch (error) {
    yield put({ type: CREATE_POST_FAIL, payload: error.message });
  }
}

function* updatePostWorker({ title, body, postId }) {
  try {
    yield call(axios.put, `${postsURL}${postId}`, { title, body }, config);
    yield put({ type: UPDATE_POST_SUCCESS });
  } catch (error) {
    yield put({ type: UPDATE_POST_FAIL, payload: error.message });
  }
}

function* deletePostWorker({ postId }) {
  try {
    yield call(axios.delete, `${postsURL}${postId}`);
    yield put({ type: DELETE_POST_SUCCESS });
  } catch (error) {
    yield put({ type: DELETE_POST_FAIL, payload: error.message });
  }
}


export function* postsWatcher() {
  yield takeEvery(GET_ALL_POSTS_REQUEST, getAllPostsWorker);
  yield takeEvery(GET_POST_DETAILS_REQUEST, getPostDetailsWorker);
  yield takeEvery(CREATE_POST_REQUEST, createPostWorker);
  yield takeEvery(UPDATE_POST_REQUEST, updatePostWorker);
  yield takeEvery(DELETE_POST_REQUEST, deletePostWorker);
}
