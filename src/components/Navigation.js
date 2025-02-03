import estate from "../assets/images/estate.png";
import { NavLink, useLocation } from "react-router-dom";
import { StyledContainer } from "../styles/Container.styled";
import {
    Logo,
    NavBar,
    StyledUL,
    StyledNavigation,
} from "../styles/StyledNav.styled";

const Navigation = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    return (
        <StyledNavigation>
            <StyledContainer>
                <NavBar>
                    <Logo src={estate} alt='Logo' />
                    <StyledUL>
                        <li className={splitLocation[1] === "" ? "active" : ""}>
                            <NavLink className='navLink' to='/'>
                                Houses
                            </NavLink>
                        </li>
                        <li className={splitLocation[1] === "about" ? "active" : ""}>
                            <NavLink className='navLink' to='/about'>
                                About
                            </NavLink>
                        </li>
                    </StyledUL>
                </NavBar>
            </StyledContainer>
        </StyledNavigation>
    );
};

export default Navigation;
