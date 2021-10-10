import {
  GET_POST_DETAILS_FAIL,
  GET_POST_DETAILS_REQUEST,
  GET_POST_DETAILS_SUCCESS,
} from '../constants/postConstants';
import { ActionType, PostType } from './types';

export interface PostDetailsStateType {
  getPostLoader: boolean;
  getPostError: null | string;
  post: PostType | null;
}

const postDetailsState: PostDetailsStateType = {
  getPostLoader: false,
  getPostError: null,
  post: null,
};

export const getPostDetailsReducer = (
  state = postDetailsState,
  action: ActionType
): PostDetailsStateType => {
  switch (action.type) {
    case GET_POST_DETAILS_REQUEST:
      return {
        getPostLoader: true,
        getPostError: null,
        post: null,
      };
    case GET_POST_DETAILS_SUCCESS:
      return {
        getPostLoader: false,
        getPostError: null,
        post: action.payload,
      };
    case GET_POST_DETAILS_FAIL:
      return {
        getPostLoader: false,
        getPostError: action.payload,
        post: null,
      };
    default:
      return state;
  }
};

// Action creator
export const getPostDetailsRequest = (postId: number) => ({
  type: GET_POST_DETAILS_REQUEST,
  postId: postId,
});
