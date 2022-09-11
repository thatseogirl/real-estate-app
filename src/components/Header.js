import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import Button from "./reusableComponents/Button";
import { Logo } from "../assets/styles/StyledNav.styled";
import estate from "../assets/images/estate.png"
import { Flex, StyledHeader } from "../assets/styles/Header.styled";
import { StyledContainer } from "../assets/styles/Container.styled";
import useMediaQuery from "./hooks/useMediaQuery";

const Header = () => {
    const breakPoint = useMediaQuery("(max-width: 768px)");
    const smallScreen = useMediaQuery("(max-width: 500px)");

    return (
        <StyledHeader>
            <StyledContainer>
                <Flex>
                    {breakPoint ?
                        (
                            <Logo src={estate} alt="Logo" />
                        ) :
                        (
                            <h3>Houses</h3>
                        )
                    }
                    <div>
                        <Link to='/createListing' className='new_listing_link'>
                            <FiPlus
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    color: "#fff",
                                }}
                            />
                            {smallScreen ? (
                                ""
                            ) : (
                                <Button
                                    text='Create New'
                                    color='#fff'
                                    padding='0'
                                    bgColor='transparent'
                                    textTransform='uppercase'
                                />
                            )}
                        </Link>
                    </div>
                </Flex>
            </StyledContainer>
        </StyledHeader>
    );
};

export default Header;
