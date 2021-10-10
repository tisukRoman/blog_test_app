import styled from 'styled-components';
import { myTheme } from '../styles/theme';


const PostBodyWrapper = styled.article`
    border-bottom: 2px solid ${myTheme.colors.dark};
    padding: 1em 0 3em 0;
`

export const PostBody: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <PostBodyWrapper>
            {children}
        </PostBodyWrapper>
    )
}
