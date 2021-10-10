interface CommentType {
  id: number;
  postId: number;
  body: string;
}

export interface PostType {
  id: number;
  title: string;
  body: string;
  comments?: CommentType[];
}

export interface ActionType {
  type: string;
  payload: any;
}
