import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { AddPostButton } from '../components/AddPostButton';
import { Error } from '../components/Error';
import { Loader } from '../components/Loader';
import { PageTitle } from '../components/PageTitle';
import { PostItem } from '../components/PostItem';
import { DeletePostStateType } from '../reducers/deletePostReducer';
import {
  AllPostsStateType,
  getAllPostsRequest,
} from '../reducers/getAllPostsReducer';
import { AppState } from '../store';

export const PostsList = () => {
  const dispatch = useDispatch<Dispatch>();

  // Post List
  const { getPostsLoader, getPostsError, posts } = useSelector<
    AppState,
    AllPostsStateType
  >((state) => state.getAllPosts);

  // Delete Post State
  const { deletePostLoader, deletePostError, deletePostSuccess } = useSelector<
    AppState,
    DeletePostStateType
  >((state) => state.deletePost);

  useEffect(() => {
    dispatch(getAllPostsRequest());
  }, [dispatch, deletePostSuccess]);
  

  if (getPostsLoader || deletePostLoader) return <Loader />;
  if (getPostsError) return <Error errorText={getPostsError} />;
  if (deletePostError) return <Error errorText={deletePostError} />;
  return (
    <>
      <PageTitle>Posts</PageTitle>
      <AddPostButton />
      {posts.reverse().map((post) => (
        <PostItem
          key={post.id}
          title={post.title}
          body={post.body}
          id={post.id}
        />
      ))}
    </>
  );
};
