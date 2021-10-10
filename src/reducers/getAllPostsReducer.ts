import {
  GET_ALL_POSTS_FAIL,
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
} from '../constants/postConstants';
import { ActionType, PostType } from './types';

export interface AllPostsStateType {
  getPostsLoader: boolean;
  getPostsError: null | string;
  posts: PostType[];
}

const AllPostsState: AllPostsStateType = {
  getPostsLoader: false,
  getPostsError: null,
  posts: [],
};

export const getAllPostsReducer = (
  state = AllPostsState,
  action: ActionType
): AllPostsStateType => {
  switch (action.type) {
    case GET_ALL_POSTS_REQUEST:
      return {
        getPostsLoader: true,
        getPostsError: null,
        posts: [],
      };
    case GET_ALL_POSTS_SUCCESS:
      return {
        getPostsLoader: false,
        getPostsError: null,
        posts: action.payload,
      };
    case GET_ALL_POSTS_FAIL:
      return {
        getPostsLoader: false,
        getPostsError: action.payload,
        posts: [],
      };
    default:
      return state;
  }
};

// Action creator
export const getAllPostsRequest = () => ({
  type: GET_ALL_POSTS_REQUEST,
});
