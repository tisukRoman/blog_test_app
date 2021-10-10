import React from 'react';
import styled from 'styled-components';
import { myTheme } from '../styles/theme';

const AppBack = styled.div`
  background-color: ${myTheme.colors.dark};
`;

export const AppBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <AppBack>{children}</AppBack>;
};
