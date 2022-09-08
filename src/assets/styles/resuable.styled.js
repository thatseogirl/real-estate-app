import styled from "styled-components";

export const SearchForm = styled.form`
  cursor: pointer;
  display: flex;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.firstTertiaryElementColor};
  border-radius: 10px;
  width: 40%;
  align-items: center;
  padding: 0.75em 1.5em;

  input {
    width: 100%;
    outline: 0;
    border: 0;
    background-color: transparent;
    font: 300 14px "Open Sans", sans-serif;
  }
`;
export const FlexWrapper = styled.div`
  padding-top: 1.25em;
`;

export const HouseWrapper = styled.div`
  margin-top: 2.5em;
  font-family: "Open Sans", sans-serif;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  border-radius: 10px;
`;
export const WrapperFlexItem = styled.div`
  display: flex;
  gap: 1em;
  padding: 1em;

  .detail_link {
    font: bold 18px "Montserrat", sans-serif;
    margin-top: "0.5em";
    color: ${({ theme }) => theme.colors.primaryTextColor};
    text-decoration: none;
    text-transform: capitalize;
  }
`;
export const House = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  object-position: bottom;
  border-radius: 10px;
`;
export const StyledAside = styled.aside`
  display: flex;
  gap: 0.25em;
`;
export const PriceTag = styled.div`
  display: flex;
  gap: 0.25em;
  margin-top: 0.5em;
`;
export const Location = styled.p`
  font: 400 16px "Open Sans", sans-serif;
  margin-top: 0.5em;
  color: ${({ theme }) => theme.colors.secondaryTertiaryElementColor};
`;

export const Price = styled.p`
  font: 600 16px "Open Sans", sans-serif;
  color: ${({ theme }) => theme.colors.secondaryElementColor};
`;

export const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin-bottom: 1.5em;

  input,
  textarea,
  #select {
    font: 600 14px "Montserrat", sans-serif;
    border: none;
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    padding: 1.5em;
    border-radius: 5px;
  }
  label {
    font: 600 14px "Montserrat", sans-serif;
  }

  textarea {
    padding-bottom: 6em;
  }
`;

export const StyledSection = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.5em;
`;
export const StyledBox = styled.div`
  border: 2px dashed ${({ theme }) => theme.colors.secondaryTextColor};
  stroke-width: 5;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  .box_img {
    cursor: pointer;
    width: 70px;
    height: 70px;
  }
`;

export const ValidationError = styled.p`
  color: ${({ theme }) => theme.colors.primaryElementColor};
  font: italic 14px "Montserrat", sans-serif;
`;
