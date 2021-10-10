import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { myTheme } from '../styles/theme';

const AddPostWrapper = styled.div`
  width: 2em;
  height: 2em;
  background-color: ${myTheme.colors.yellow};
  border: 2px solid ${myTheme.colors.dark};
  border-radius: 50%;
  line-height: 2em;
  font-size: 3rem;
  text-align: center;
  position: fixed;
  right: 1em;
  bottom: 1em;
  cursor: pointer;
  color: ${myTheme.colors.dark};
  transition: 0.3s;
  &:hover {
    background-color: ${myTheme.colors.green};
  }
`;

export const AddPostButton = () => {
  return (
    <>
      <Link to='/create-post'>
        <AddPostWrapper>+</AddPostWrapper>
      </Link>
    </>
  );
};
