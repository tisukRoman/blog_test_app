import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './operations/rootSaga';
import { getAllPostsReducer } from './reducers/getAllPostsReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  getAllPosts: getAllPostsReducer,
});

const initialState = {};

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
