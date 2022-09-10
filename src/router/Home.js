import React from 'react'
import { StyledContainer, StyledMainContainer } from '../assets/styles/Container.styled'
import { Flex } from '../assets/styles/Header.styled'
import { SearchForm, FlexWrapper } from '../assets/styles/reusable.styled'
import { Header, HouseOverView, HouseSorting } from '../components'
import { FiSearch } from "react-icons/fi"
import { MdClear } from "react-icons/md"
import useMediaQuery from "../components/hooks/useMediaQuery";

const Home = () => {
    const breakPoint = useMediaQuery("(max-width: 768px)");
    return (
        <StyledMainContainer>
            <Header />
            <StyledContainer>
                <FlexWrapper>
                    <Flex style={{ flexDirection: breakPoint ? "column" : "", gap: breakPoint ? "1em" : "" }}>
                        <SearchForm>
                            <FiSearch />
                            <input
                                type="text"
                                placeholder="Search for a house"
                            />
                            <MdClear />
                        </SearchForm>
                        <HouseSorting />
                    </Flex>
                </FlexWrapper>
            </StyledContainer>
            <HouseOverView />
        </StyledMainContainer>
    )
}

export default Home