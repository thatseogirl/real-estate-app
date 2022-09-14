import React from "react";
import {
    StyledContainer,
    StyledMainContainer,
} from "../assets/styles/Container.styled";
import { Flex } from "../assets/styles/Header.styled";
import { SearchForm, FlexWrapper } from "../assets/styles/reusable.styled";
import { Header, HouseOverView, HouseSorting } from "../components";
import { FiSearch } from "react-icons/fi";
import { MdClear } from "react-icons/md";
import useMediaQuery from "../components/hooks/useMediaQuery";
import { useEffect, useState } from "react";
import {
    fetchAllHouses,
    filteredListing,
    houses,
    newListing,
} from "../redux/actions/listingActions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const breakPoint = useMediaQuery("(max-width: 768px)");
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch();
    const getHouses = useSelector(houses);
    const newHouseListing = useSelector(newListing);

    useEffect(() => {
        dispatch(fetchAllHouses());
    }, [dispatch]);

    const clearSearch = () => {
        setSearchValue("");
    };
    const handleChange = (e) => {
        const searchTerm = e.target.value;
        dispatch(filteredListing(searchTerm));
    };
    return (
        <StyledMainContainer>
            <Header />
            <StyledContainer>
                <FlexWrapper>
                    <Flex
                        style={{
                            flexDirection: breakPoint ? "column" : "",
                            gap: breakPoint ? "1em" : "",
                        }}
                    >
                        <SearchForm>
                            <FiSearch />
                            <input
                                type='text'
                                placeholder='Search for a house'
                                onChange={handleChange}
                                value={searchValue}
                            />
                            <MdClear onClick={clearSearch} />
                        </SearchForm>
                        <HouseSorting getHouses={getHouses} />
                    </Flex>
                </FlexWrapper>
            </StyledContainer>
            <HouseOverView getHouses={getHouses} newHouseListing={newHouseListing} />
        </StyledMainContainer>
    );
};

export default Home;
