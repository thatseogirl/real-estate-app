import styled from "styled-components";

export const StyledHeader = styled.header`
    padding: 7em 0 0em;

    @media (max-width: ${({ theme }) => theme.mobile.ipad}) {
      padding: 2em 0 0 ;
    }

 h3 {
    margin: 0;
    font: bold 32px "Montserrat", sans-serif;
}
`
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;

.new_listing_link {
  text-decoration: none;
  display: flex;
  border-radius: 10px;
  gap: 10px;
  align-items: center;
  padding: 0.5em 1em;
  background-color: ${(({ theme }) => theme.colors.primaryElementColor)};

}
`