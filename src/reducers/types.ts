export interface PostType {
  id: number;
  title: string;
  body: string;
}

export interface ActionType {
  type: string;
  payload: any;
}
