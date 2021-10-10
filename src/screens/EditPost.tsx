import { PostForm } from '../components/PostForm';
import { PageTitle } from '../components/PageTitle';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { match, useHistory, useRouteMatch } from 'react-router';
import { useEffect, useState } from 'react';
import {
  getPostDetailsRequest,
  PostDetailsStateType,
} from '../reducers/getPostDetailsReducer';
import { AppState } from '../store';
import { Loader } from '../components/Loader';
import { Error } from '../components/Error';
import {
  updatePostRequest,
  updatePostReset,
  UpdatePostStateType,
} from '../reducers/updatePostReducer';

export const EditPost = () => {
  const dispatch = useDispatch<Dispatch>();

  // Getting Current Post Id
  const match: match<{ id: string }> = useRouteMatch();
  const postId = Number(match.params.id);

  const history = useHistory();

  // Post Details State
  const { getPostLoader, getPostError, post } = useSelector<
    AppState,
    PostDetailsStateType
  >((state) => state.getPostDetails);

  // Update Post State
  const { updatePostLoader, updatePostError, updatePostSucess } = useSelector<
    AppState,
    UpdatePostStateType
  >((state) => state.updatePost);

  useEffect(() => {
    dispatch(getPostDetailsRequest(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  useEffect(() => {
    if (updatePostSucess) {
      history.push('/');
      dispatch(updatePostReset());
    }
  }, [updatePostSucess, history, dispatch]);

  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updatePostRequest(title, body, postId));
  };

  if (getPostLoader || updatePostLoader) return <Loader />;
  if (getPostError) return <Error errorText={getPostError} />;
  if (updatePostError) return <Error errorText={updatePostError} />;
  return (
    <>
      <PageTitle>Edit Post</PageTitle>
      {
        <PostForm
          buttonTitle='Create'
          onSubmit={submitHandler}
          body={body}
          title={title}
          setTitle={setTitle}
          setBody={setBody}
        />
      }
    </>
  );
};
