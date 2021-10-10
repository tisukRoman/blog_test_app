import { useState } from 'react';
import styled from 'styled-components';
import { myTheme } from '../styles/theme';

const PostFormForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const PostFormTitle = styled.input`
  height: 3em;
  padding: 1em;
  margin-bottom: 1em;
  border: 1px solid ${myTheme.colors.dark};
  border-radius: 0.5em;
`;

const PostFormBody = styled.textarea`
  height: 30em;
  padding: 1em;
  margin-bottom: 1em;
  resize: none;
  border-radius: 0.5em;
`;

const PostFormButton = styled.button`
  display: block;
  height: 3em;
  padding: 1em;
  width: 12em;
  margin: 0 auto;
  border: 1px solid ${myTheme.colors.dark};
  border-radius: 0.5em;
  background-color: ${myTheme.colors.green};
  color: #fff;
  cursor: pointer;
`;

interface PostFormProps {
  buttonTitle: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  body: string;
  setTitle: (value: string) => void;
  setBody: (value: string) => void;
}

export const PostForm: React.FC<PostFormProps> = ({
  buttonTitle,
  onSubmit,
  title,
  body,
  setTitle,
  setBody
}) => {
  return (
    <PostFormForm onSubmit={onSubmit}>
      <PostFormTitle
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Enter the title of your post...'
        maxLength={60}
      />
      <PostFormBody
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder='Enter the text of your post...'
      ></PostFormBody>
      <PostFormButton type='submit'>{buttonTitle}</PostFormButton>
    </PostFormForm>
  );
};
