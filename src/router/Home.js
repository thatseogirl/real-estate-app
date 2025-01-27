import React from "react";
import {
    StyledContainer,
    StyledMainContainer,
} from "../styles/Container.styled";
import EmptyState from "../pages/EmptyState";
import { Flex } from "../styles/Header.styled";
import { SearchForm, FlexWrapper } from "../styles/reusable.styled";
import Header from "../components/Header";
import HouseOverView from "../pages/HouseOverView";
import HouseSorting from "../pages/HouseSorting";
import { FiSearch } from "react-icons/fi";
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect } from "react";
import {
    fetchAllHouses,
    filteredListing,
    houses,
    newListing
} from "../redux/actions/listingActions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const breakPoint = useMediaQuery("(max-width: 768px)");
    const result = useSelector((state) => state.searchTerm)
    const dispatch = useDispatch();
    const getHouses = useSelector(houses);
    const newHouseListing = useSelector(newListing);

    useEffect(() => {
        dispatch(fetchAllHouses());
    }, [dispatch]);

    const handleChange = (e) => {
        dispatch(filteredListing(e.target.value));
    };
    const houseData = newHouseListing?.length > 0 ? newHouseListing : getHouses;

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
                                value={result}
                            />
                        </SearchForm>
                        <HouseSorting getHouses={houseData} />
                    </Flex>
                    {houseData.length === 0 ? <EmptyState /> :
                        <p>{houseData.length} results found</p>}
                </FlexWrapper>
            </StyledContainer>
            <HouseOverView  />
        </StyledMainContainer>
    );
};

export default Home;
