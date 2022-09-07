import React from 'react'
import { StyledContainer, StyledMainContainer } from '../assets/styles/Container.styled'
import { Flex } from '../assets/styles/Header.styled'
import { SearchForm, FlexWrapper } from '../assets/styles/resuable.styled'
import { Header, HouseOverView, HouseSorting } from '../components'
import { FiSearch } from "react-icons/fi"
import { MdClear } from "react-icons/md"

const Home = () => {
    return (
        <StyledMainContainer>
            <Header />
            <StyledContainer>
                <FlexWrapper>
                    <Flex>
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