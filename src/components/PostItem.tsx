import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { myTheme } from '../styles/theme';

const PostItemWrapper = styled.div`
  background-color: ${myTheme.colors.green};
  margin-bottom: 3em;
  border: 2px solid ${myTheme.colors.dark};
  border-radius: 0.5em;
  overflow: hidden;
  height: 30em;
  display: flex;
  flex-direction: column;
`;

const PostItemTitle = styled.div`
  border-bottom: 2px solid ${myTheme.colors.dark};
  font-size: 1.5rem;
  padding: 1em;
  height: 3em;
`;

const PostItemBody = styled.div`
  font-size: 1rem;
  padding: 1em;
  height: 23em;
  background-color: #fff;
`;

const PostItemButtons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 2px solid ${myTheme.colors.dark};
  height: 3em;
  padding: 0.5em;
`;

const PostItemButton = styled.div`
  width: 5em;
  text-decoration: none;
  color: ${myTheme.colors.dark};
  font-size: 1.2rem;
`;

interface PostItemProps {
  id: number;
  title: string;
  body: string;
}

export const PostItem: React.FC<PostItemProps> = ({ title, body, id }) => {
  return (
    <PostItemWrapper>
      <PostItemTitle>{title}</PostItemTitle>
      <PostItemBody>
        <p>{body}</p>
      </PostItemBody>
      <PostItemButtons>
        <Link to={`/post/${id}`}>
          <PostItemButton>Details</PostItemButton>
        </Link>
      </PostItemButtons>
    </PostItemWrapper>
  );
};
