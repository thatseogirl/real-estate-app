import styled from "styled-components";

export const SearchForm = styled.form`
  cursor: pointer;
  display: flex;
  gap: 20px;
  background-color: ${(({ theme }) => theme.colors.firstTertiaryElementColor)};
  border-radius: 10px;
  width: 40%;
  height: 10vh;
  align-items: center;
  padding: 0em 1.5em;

  input {
    width: 100%;
    outline: 0;
    border: 0;
    background-color: transparent;
    font: 300 14px "Open Sans", sans-serif;
  }
`
export const FlexWrapper = styled.div`
 padding-top: 1.5em;
`