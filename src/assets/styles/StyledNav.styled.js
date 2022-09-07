import styled from "styled-components";

export const StyledNavigation = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  padding: 0.75em 0;
`;

export const NavBar = styled.nav`
  overflow: hidden;
  display: flex;
`;

export const StyledUL = styled.ul`
  display: flex;
  gap: 2rem;
  margin-top: 0.5em;
  font-family: "Montserrat", sans-serif;

  li {
    list-style: none;
  }
  .navLink {
    text-decoration: none;
    font: 500 18px "Montserrat", sans-serif;
    color: ${({ theme }) => theme.colors.secondaryTertiaryElementColor};
  }
  .active {
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font: bold 18px "Montserrat", sans-serif;
  }
`;

export const Logo = styled.img`
  width: 5%;
  height: 6vh;
`;