import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
  justify-content: ${(props: {
    justifyContent?:
      | 'center'
      | 'flex-start'
      | 'flex-end'
      | 'space-between'
      | 'space-around'
      | 'space-evenly';
  }) => (props.justifyContent ? props.justifyContent : 'flex-start')};
`;

interface FlexRowProps {
  children: React.ReactNode;
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}

export const FlexRow: React.FC<FlexRowProps> = ({
  children,
  justifyContent,
}) => {
  return <FlexWrapper justifyContent={justifyContent}>{children}</FlexWrapper>;
};
