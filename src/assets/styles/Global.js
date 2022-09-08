import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        background-color: ${({ theme }) => theme.colors.secondaryBackground};
        width: 100%;
        height: 100%;
        margin: 0;
    }

    img{
        max-width: 100%;
    }

    .image {
        width: 20px;
        height: 20px;
    }

`;

export default GlobalStyles;
