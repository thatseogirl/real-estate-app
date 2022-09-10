import styled from "styled-components";

const StyledButton = styled.button`
  display: inline;
  border: none;
  padding: 0.85em 4em;
  margin: 5px;
  border-radius: 10px;
  cursor: pointer;
  font: bold 18px "Montserrat", sans-serif;
  @media (max-width: ${({ theme }) => theme.mobile.ipad}) {
      padding: 0.85em 0 ;
    }
  &:hover {
    transform: scale(0.98);
  }
`

export default StyledButton