import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 75%;
  max-width: 100%;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.mobile.ipad}) {
    width: 100%;
    padding: 0 1.75em ;
    }
`;

export const StyledMainContainer = styled.div`
  background-color: ${(({ theme }) => theme.colors.secondaryBackground)};
  height: 100vh;
`
export const StyledFormWrapper = styled.div`
  height: 100vh;

  h3 {
    font: bold 22px "Montserrat", sans-serif;
  }

  .image-upload > input {
    display: none;
}
`