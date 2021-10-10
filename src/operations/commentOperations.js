import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { CREATE_COMMENT_FAIL, CREATE_COMMENT_REQUEST, CREATE_COMMENT_SUCCESS } from '../constants/commentConstants';


const commentsURL = 'https://bloggy-api.herokuapp.com/comments/';

const config = {
    headers: {
        'Content-Type': 'application/json',
    }
}

function* createCommentWorker({ postId, body }) {
    try {
        yield call(axios.post, `${commentsURL}`, { postId, body }, config);
        yield put({ type: CREATE_COMMENT_SUCCESS });
    } catch (error) {
        yield put({ type: CREATE_COMMENT_FAIL, payload: error.message });
    }
}


export function* commentWatcher() {
    yield takeEvery(CREATE_COMMENT_REQUEST, createCommentWorker);
}