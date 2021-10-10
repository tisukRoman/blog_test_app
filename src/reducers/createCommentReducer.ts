import {
  CREATE_COMMENT_FAIL,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
} from '../constants/commentConstants';
import { ActionType } from './types';

export interface CreateCommentStateType {
  createCommentLoader: boolean;
  createCommentSuccess: boolean;
  createCommentError: null | string;
}

const createCommentState: CreateCommentStateType = {
  createCommentLoader: false,
  createCommentSuccess: false,
  createCommentError: null,
};

export const createCommentReducer = (
  state = createCommentState,
  action: ActionType
) => {
  switch (action.type) {
    case CREATE_COMMENT_REQUEST:
      return {
        createCommentLoader: true,
        createCommentSuccess: false,
        createCommentError: null,
      };
    case CREATE_COMMENT_SUCCESS:
      return {
        createCommentLoader: false,
        createCommentSuccess: true,
        createCommentError: null,
      };
    case CREATE_COMMENT_FAIL:
      return {
        createCommentLoader: false,
        createCommentSuccess: false,
        createCommentError: action.payload,
      };
    default:
      return state;
  }
};

export const createCommentRequest = (postId: number, body: string) => ({
  type: CREATE_COMMENT_REQUEST,
  postId,
  body,
});
