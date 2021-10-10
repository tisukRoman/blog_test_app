import styled from 'styled-components';

const LoaderWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;

export const Loader = () => {
  return <LoaderWrapper>Loading...</LoaderWrapper>;
};
