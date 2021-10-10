import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './operations/rootSaga';
import { getAllPostsReducer } from './reducers/getAllPostsReducer';
import { getPostDetailsReducer } from './reducers/getPostDetailsReducer';
import { createPostReducer } from './reducers/createPostReducer';
import { updatePostReducer } from './reducers/updatePostReducer';
import { deletePostReducer } from './reducers/deletePostReducer';
import { createCommentReducer } from './reducers/createCommentReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  getAllPosts: getAllPostsReducer,
  getPostDetails: getPostDetailsReducer,
  createPost: createPostReducer,
  updatePost: updatePostReducer,
  deletePost: deletePostReducer,
  createComment: createCommentReducer,
});

const initialState = {};

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
