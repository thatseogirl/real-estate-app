import React from "react";
import { StyledContainer } from "../assets/styles/Container.styled";
import { Logo } from "../assets/styles/StyledNav.styled";
import { AboutContainer } from "../assets/styles/About.styled";
import { StyledAside } from "../assets/styles/reusable.styled";
import estate from "../assets/images/estate.png";

export default function About() {
    return (
        <StyledContainer>
            <AboutContainer>
                <div>
                    <h1>About Us</h1>
                    <div>
                        <p className='text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                            aliquid amet inventore architecto magnam ipsam libero consequatur,
                            harum dignissimos voluptate nam nulla modi sapiente voluptates
                            fugit! Alias nam autem iure, obcaecati et dicta laudantium ut sit
                            porro quia voluptates, doloribus exercitationem asperiores saepe,
                            unde quod soluta ex inventore quae. Dolor!
                        </p>
                        <StyledAside style={{ marginTop: "2em" }}>
                            <Logo src={estate} alt='Logo' />
                            <div style={{ marginTop: "0.25em" }}>
                                <p>By ThatSeoGirl</p>
                                <a
                                    href='https://thatseogirl.netlify.app/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    Personal Portfolio
                                </a>
                            </div>
                        </StyledAside>
                    </div>
                </div>
            </AboutContainer>
        </StyledContainer>
    );
}
