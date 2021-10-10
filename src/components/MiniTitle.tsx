import styled from 'styled-components';
import { myTheme } from '../styles/theme';

const MiniTitleWrapper = styled.div`
  font-size: 1rem;
  padding: 0.5em 0;
  margin: 1em 0 2em 0;
  color: ${myTheme.colors.dark};
`;

interface MiniTitleProps {
  children: React.ReactNode;
}

export const MiniTitle: React.FC<MiniTitleProps> = ({ children }) => {
  return (
    <MiniTitleWrapper>
      <h2>{children}</h2>
    </MiniTitleWrapper>
  );
};
