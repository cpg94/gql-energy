import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.text};
    font-family: 'Poppins', sans-serif;
}
`;

export default GlobalStyle;