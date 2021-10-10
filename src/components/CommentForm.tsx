import { useState } from 'react';
import styled from 'styled-components';

const CommentFormWrapper = styled.div`
  width: 50%;
`;

const CommentFormForm = styled.form`
  width: 100%;
  height: 20em;
`;

const CommentFormTextArea = styled.textarea`
  width: 100%;
  height: 20em;
  padding: 1em;
  resize: none;
`;

const CommentFormButton = styled.button`
  display: block;
  width: 100%;
  height: 3em;
  padding: 1em;
`;

interface CommentFormProps {
  autofocus?: boolean;
}

export const CommentForm: React.FC<CommentFormProps> = ({ autofocus }) => {
  const [comment, setComment] = useState('');

  return (
    <CommentFormWrapper>
      <CommentFormForm onSubmit={() => {}} id='comment-form'>
        <CommentFormTextArea
          form='comment-form'
          placeholder='Enter your comment...'
          cols={40}
          rows={5}
          required
        ></CommentFormTextArea>
        <CommentFormButton>Add Comment</CommentFormButton>
      </CommentFormForm>
    </CommentFormWrapper>
  );
};
