import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 65%;
  max-width: 100%;
  margin: auto;
`;

export const StyledMainContainer = styled.div`
  background-color: ${(({ theme }) => theme.colors.secondaryBackground)};
  height: 100vh;
`
