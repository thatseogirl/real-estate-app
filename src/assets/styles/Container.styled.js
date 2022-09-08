import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 75%;
  max-width: 100%;
  margin: auto;
`;

export const StyledMainContainer = styled.div`
  background-color: ${(({ theme }) => theme.colors.secondaryBackground)};
  height: 100vh;
`
export const StyledFormWrapper = styled.div`
  height: 100vh;

  .back_link {
    color: ${(({ theme }) => theme.colors.primaryTextColor)};
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
  h3 {
    font: bold 22px "Montserrat", sans-serif;
  }
  .image-upload > input {
  display: none;
}
`