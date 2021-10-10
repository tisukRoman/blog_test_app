import styled from 'styled-components';
import { myTheme } from '../styles/theme';

const PageTitleWrapper = styled.div`
  width: 100%;
  background-color: ${myTheme.colors.green};
  border: 2px solid ${myTheme.colors.dark};
  border-radius: 0.5em;
  font-size: 1.5rem;
  padding: 0.5em;
  margin-bottom: 2em;
  text-align: center;
`;

interface PageTitleProps {
  children: React.ReactNode;
}

export const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return (
    <PageTitleWrapper>
      <h3>{children}</h3>
    </PageTitleWrapper>
  );
};
