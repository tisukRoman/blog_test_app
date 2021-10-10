import { useState } from 'react';
import { CommentBox } from '../components/CommentBox';
import { CommentForm } from '../components/CommentForm';
import { FlexRow } from '../components/FlexRow';
import { MiniTitle } from '../components/MiniTitle';
import { PageTitle } from '../components/PageTitle';
import { PostBody } from '../components/PostBody';

export const PostDetails = () => {
  const [post, setPost] = useState({
    id: 1,
    title: 'Sunt aut facere repellat provident occaecati ',
    body: 'Quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
    comments: [
      {
        id: 1,
        postId: 1,
        body: 'Odio adipisci rerum aut animi!',
      },
      {
        id: 2,
        postId: 1,
        body: 'dsf dpklpok sdpsdkso  adipisci rerum aut animi!',
      },
    ],
  });

  return (
    <>
      <PageTitle>{post.title}</PageTitle>
      <PostBody>{post.body}</PostBody>
      <MiniTitle>Comments</MiniTitle>
      <FlexRow justifyContent='space-between'>
        <div>
          {post.comments.map((comment) => (
            <CommentBox key={comment.id} body={comment.body} />
          ))}
        </div>
        <CommentForm />
      </FlexRow>
    </>
  );
};
