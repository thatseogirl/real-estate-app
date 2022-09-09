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
export const StyledMargin = styled.div`
  display: flex;
  gap: 0.5em;
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

export const StyledCard = styled.div`
  width: 55%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const CardImage = styled.img`
  width: 100%;
`;
export const CardBody = styled.div`
  padding: 0.95em;
`;
export const CardText = styled.h3`
  font: bold 22px "Montserrat", sans-serif;
  text-transform: capitalize;
  margin-bottom: 0.3em;
  color: ${({ theme }) => theme.colors.primaryTextColor};
`;

export const CardFlexItem = styled.div`
  display: flex;
  font: 400 14px "Open Sans", sans-serif;
  gap: 0.25em;
  color: ${({ theme }) => theme.colors.secondaryElementColor};
`;
export const CardDescription = styled.div`
  margin: 1em 0 1em;
  font: 400 14px "Open Sans", sans-serif;
  color: ${({ theme }) => theme.colors.secondaryElementColor};
`;
export const ModalOverLay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondaryElementColor};
  opacity: 0.96;
  font-family: "Montserrat", sans-serif;
`;

export const ModalContainer = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  position: absolute;
  height: 250px;
  width: 400px;
  margin-top: 15%;
  padding: 1.5em;
  border-radius: 10px;

  h4 {
    font: bold 22px "Montserrat", sans-serif;
  }
`;
export const Mobile = styled.nav`
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  position: fixed;
  bottom: 0;
  width: 100%;

  ul {
    display: flex;
    justify-content: space-around;
    padding: 0.5em;
  }

  li {
    list-style: none;
  }

  .footer_img {
    width: 60px;
    height: 60px;
    color: ${({ theme }) => theme.colors.primaryTextColor};
  }
  .active {
    color: ${({ theme }) => theme.colors.primaryElementColor};
    width: 60px;
    height: 60px;
  }
`;
