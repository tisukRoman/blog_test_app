import styled from 'styled-components';

const CommentFormWrapper = styled.div`
  min-width: 50%;
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
  comment: string;
  setComment: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const CommentForm: React.FC<CommentFormProps> = ({
  comment,
  setComment,
  onSubmit,
}) => {
  return (
    <CommentFormWrapper>
      <CommentFormForm onSubmit={onSubmit} id='comment-form'>
        <CommentFormTextArea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
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
