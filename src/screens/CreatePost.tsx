import { PostForm } from '../components/PostForm';
import { PageTitle } from '../components/PageTitle';
import { useEffect, useState } from 'react';
import {
  createPostRequest,
  createPostReset,
  CreatePostStateType,
} from '../reducers/createPostReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { useHistory } from 'react-router';
import { AppState } from '../store';
import { Loader } from '../components/Loader';
import { Error } from '../components/Error';

export const CreatePost = () => {
  const dispatch = useDispatch<Dispatch>();
  const history = useHistory();

  const { createPostLoader, createPostError, createPostSucess } = useSelector<
    AppState,
    CreatePostStateType
  >((state) => state.createPost);

  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  useEffect(() => {
    if (createPostSucess) {
      history.push('/');
      dispatch(createPostReset());
    }
  }, [history, createPostSucess, dispatch]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createPostRequest(title, body));
  };

  if (createPostLoader) return <Loader />;
  if (createPostError) return <Error errorText={createPostError} />;
  return (
    <>
      <PageTitle>Create Post</PageTitle>
      <PostForm
        buttonTitle='Create'
        onSubmit={submitHandler}
        body={body}
        title={title}
        setTitle={setTitle}
        setBody={setBody}
      />
    </>
  );
};
