import {
  DELETE_POST_FAIL,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
} from '../constants/postConstants';
import { ActionType } from './types';

export interface DeletePostStateType {
  deletePostLoader: boolean;
  deletePostError: string | null;
  deletePostSuccess: boolean;
}

const deletePostState: DeletePostStateType = {
  deletePostLoader: false,
  deletePostError: null,
  deletePostSuccess: false,
};

export const deletePostReducer = (
  state = deletePostState,
  action: ActionType
): DeletePostStateType => {
  switch (action.type) {
    case DELETE_POST_REQUEST:
      return {
        deletePostLoader: true,
        deletePostError: null,
        deletePostSuccess: false,
      };
    case DELETE_POST_SUCCESS:
      return {
        deletePostLoader: false,
        deletePostError: null,
        deletePostSuccess: true,
      };
    case DELETE_POST_FAIL:
      return {
        deletePostLoader: false,
        deletePostError: action.payload,
        deletePostSuccess: false,
      };
    default:
      return state;
  }
};

export const deletePostRequest = (postId: number) => ({ type: DELETE_POST_REQUEST, postId });
