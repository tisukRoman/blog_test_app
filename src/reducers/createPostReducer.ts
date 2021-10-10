import {
  CREATE_POST_FAIL,
  CREATE_POST_REQUEST,
  CREATE_POST_RESET,
  CREATE_POST_SUCCESS,
} from '../constants/postConstants';
import { ActionType } from './types';

export interface CreatePostStateType {
  createPostLoader: boolean;
  createPostError: null | string;
  createPostSucess: boolean;
}

const createPostState: CreatePostStateType = {
  createPostLoader: false,
  createPostError: null,
  createPostSucess: false,
};

export const createPostReducer = (
  state = createPostState,
  action: ActionType
): CreatePostStateType => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return {
        createPostLoader: true,
        createPostError: null,
        createPostSucess: false,
      };
    case CREATE_POST_SUCCESS:
      return {
        createPostLoader: false,
        createPostError: null,
        createPostSucess: true,
      };
    case CREATE_POST_FAIL:
      return {
        createPostLoader: false,
        createPostError: action.payload,
        createPostSucess: false,
      };
    case CREATE_POST_RESET:
      return {
        createPostLoader: false,
        createPostError: null,
        createPostSucess: false,
      };
    default:
      return state;
  }
};

export const createPostRequest = (title: string, body: string) => ({
  type: CREATE_POST_REQUEST,
  title,
  body,
});

export const createPostReset = () => ({ type: CREATE_POST_RESET });
