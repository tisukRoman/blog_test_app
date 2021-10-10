import { useState } from 'react';
import styled from 'styled-components';
import { myTheme } from '../styles/theme';

const CreatePostFormForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const CreatePostFormTitle = styled.input`
  height: 3em;
  padding: 1em;
  margin-bottom: 1em;
  border: 1px solid ${myTheme.colors.dark};
  border-radius: 0.5em;
`;

const CreatePostFormBody = styled.textarea`
  height: 30em;
  padding: 1em;
  margin-bottom: 1em;
  resize: none;
  border-radius: 0.5em;
`;

const CreatePostFormButton = styled.button`
  display: block;
  height: 3em;
  padding: 1em;
  width: 12em;
  margin: 0 auto;
  border: 1px solid ${myTheme.colors.dark};
  border-radius: 0.5em;
  background-color: ${myTheme.colors.green};
  color: #fff;
`;

export const CreatePostForm = () => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  return (
    <CreatePostFormForm>
      <CreatePostFormTitle
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Enter the title of your post...'
        maxLength={60}
      />
      <CreatePostFormBody
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder='Enter the text of your post...'
      ></CreatePostFormBody>
      <CreatePostFormButton type='submit'>Create Post</CreatePostFormButton>
    </CreatePostFormForm>
  );
};
