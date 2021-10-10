import styled from 'styled-components';
import { myTheme } from '../styles/theme';

const Wrapper = styled.div`
  background-color: #eee;
  max-width: 1024px;
  min-height: 100vh;
  border: 1px solid ${myTheme.colors.dark};
  margin: 0 auto;
  padding: 2em 5em;
`;

interface ContentWrapperProps {
  children: React.ReactNode;
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
