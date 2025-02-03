import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, html{
        background-color: ${({ theme }) => theme.colors.secondaryBackground};
        width: 100%;
        height: 100vh;
        margin: 0;
    }

    img{
        max-width: 100%;
    }
    
    .back_link {
        color: ${({ theme }) => theme.colors.primaryTextColor};
        font: 400 16px "Montserrat", sans-serif;
        text-decoration: none;
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
        @media (max-width: ${({ theme }) => theme.mobile.ipad}) {
            padding: 0.25em ;
    }
  }

    .back_link_img {
        width: 25px;
        height: 25px;
  }
    .image {
        width: 20px;
        height: 20px;
    }

`;

export default GlobalStyles;
