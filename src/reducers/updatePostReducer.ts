import {
  UPDATE_POST_FAIL,
  UPDATE_POST_REQUEST,
  UPDATE_POST_RESET,
  UPDATE_POST_SUCCESS,
} from '../constants/postConstants';
import { ActionType } from './types';

export interface UpdatePostStateType {
  updatePostLoader: boolean;
  updatePostError: null | string;
  updatePostSucess: boolean;
}

const updatePostState: UpdatePostStateType = {
  updatePostLoader: false,
  updatePostError: null,
  updatePostSucess: false,
};

export const updatePostReducer = (
  state = updatePostState,
  action: ActionType
): UpdatePostStateType => {
  switch (action.type) {
    case UPDATE_POST_REQUEST:
      return {
        updatePostLoader: true,
        updatePostError: null,
        updatePostSucess: false,
      };
    case UPDATE_POST_SUCCESS:
      return {
        updatePostLoader: false,
        updatePostError: null,
        updatePostSucess: true,
      };
    case UPDATE_POST_FAIL:
      return {
        updatePostLoader: false,
        updatePostError: action.payload,
        updatePostSucess: false,
      };
    case UPDATE_POST_RESET:
      return {
        updatePostLoader: false,
        updatePostError: null,
        updatePostSucess: false,
      };
    default:
      return state;
  }
};

export const updatePostRequest = (title: string, body: string, postId: number) => ({
  type: UPDATE_POST_REQUEST,
  title,
  body,
  postId
});

export const updatePostReset = () => ({ type: UPDATE_POST_RESET });
