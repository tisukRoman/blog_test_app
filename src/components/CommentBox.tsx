import styled from 'styled-components';
import { myTheme } from '../styles/theme';

const CommentBoxWrapper = styled.div`
  margin: 0 2em 1em 0;
  max-width: 100%;
  padding: 1em;
  border: 1px solid ${myTheme.colors.dark};
  border-radius: 0.5em;
  color: ${myTheme.colors.dark};
`;

interface CommentBoxProps {
  body: string;
}

export const CommentBox: React.FC<CommentBoxProps> = ({ body }) => {
  return (
    <>
      <CommentBoxWrapper>{body}</CommentBoxWrapper>{' '}
    </>
  );
};
