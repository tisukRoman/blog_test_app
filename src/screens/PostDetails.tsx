import { CommentBox } from '../components/CommentBox';
import { CommentForm } from '../components/CommentForm';
import { FlexRow } from '../components/FlexRow';
import { MiniTitle } from '../components/MiniTitle';
import { PageTitle } from '../components/PageTitle';
import { PostBody } from '../components/PostBody';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';
import {
  getPostDetailsRequest,
  PostDetailsStateType,
} from '../reducers/getPostDetailsReducer';
import { Loader } from '../components/Loader';
import { Error } from '../components/Error';
import { Dispatch } from 'redux';
import { useEffect, useState } from 'react';
import { match, useRouteMatch } from 'react-router';
import {
  createCommentRequest,
  CreateCommentStateType,
} from '../reducers/createCommentReducer';

export const PostDetails = () => {
  const dispatch = useDispatch<Dispatch>();

  // Getting Current Post Id
  const match: match<{ id: string }> = useRouteMatch();
  const postId = Number(match.params.id);

  // Post Details State
  const { getPostLoader, getPostError, post } = useSelector<
    AppState,
    PostDetailsStateType
  >((state) => state.getPostDetails);

  // Create Comment State
  const { createCommentLoader, createCommentSuccess, createCommentError } =
    useSelector<AppState, CreateCommentStateType>(
      (state) => state.createComment
    );

  useEffect(() => {
    dispatch(getPostDetailsRequest(postId));
  }, [dispatch, postId, createCommentSuccess]);

  const [comment, setComment] = useState('');

  const commentHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createCommentRequest(postId, comment));
    setComment('');
  };

  if (getPostLoader || !post || createCommentLoader) return <Loader />;
  if (createCommentError) return <Error errorText={createCommentError} />;
  if (getPostError) return <Error errorText={getPostError} />;
  return (
    <>
      <PageTitle>{post.title}</PageTitle>
      <PostBody>{post.body}</PostBody>
      <MiniTitle>Comments</MiniTitle>
      <FlexRow justifyContent='space-between'>
        <div>
          {post.comments?.length ? (
            post.comments.map((comment) => (
              <CommentBox key={comment.id} body={comment.body} />
            ))
          ) : (
            <div>No comments...</div>
          )}
        </div>
        <CommentForm
          comment={comment}
          setComment={setComment}
          onSubmit={commentHandler}
        />
      </FlexRow>
    </>
  );
};
