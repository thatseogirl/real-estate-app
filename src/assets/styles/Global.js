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
    
    .back_link {
        color: ${({ theme }) => theme.colors.primaryTextColor};
        font: 400 16px "Montserrat", sans-serif;
        text-decoration: none;
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
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
