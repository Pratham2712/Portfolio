import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
        }
        scroll-behavior: smooth;
    }
    body {
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        overflow-x: hidden;
        background: #1b1b1b;
        height: 100%;
    }`;

export default GlobalStyles;
