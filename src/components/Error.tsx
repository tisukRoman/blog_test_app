import styled from 'styled-components';
import { myTheme } from '../styles/theme';

const ErrorWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: ${myTheme.colors.red};
`;

export const Error: React.FC<{ errorText: string }> = ({ errorText }) => {
  return <ErrorWrapper>{errorText}</ErrorWrapper>;
};
