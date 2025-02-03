import styled from "styled-components";

export const AboutContainer = styled.div`
 overflow: hidden;
  /* width: 100vw; */
  height: 100vh;
  padding: 8em 0 0;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};

  @media (max-width: ${({ theme }) => theme.mobile.ipad}) {
    padding: 2em;
    height: 1000px;
  }

  .text {
    font: 400 2.5vh "Open Sans", sans-serif;
  word-spacing: 0.15em;
  line-height: 1.9;
  margin-top: 1em;
  }

  a {
    text-decoration: none;
  color: ${({ theme }) => theme.colors.hyperlinkTextColor};
  }
  `;
