import React from "react";
import {
    StyledContainer,
    StyledMainContainer,
} from "../assets/styles/Container.styled";
import EmptyState from "../components/pages/EmptyState";
import { Flex } from "../assets/styles/Header.styled";
import { SearchForm, FlexWrapper } from "../assets/styles/reusable.styled";
import { Header, HouseOverView, HouseSorting } from "../components";
import { FiSearch } from "react-icons/fi";
import useMediaQuery from "../components/hooks/useMediaQuery";
import { useEffect } from "react";
import {
    fetchAllHouses,
    filteredListing,
    houses,
    newListing,
} from "../redux/actions/listingActions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const breakPoint = useMediaQuery("(max-width: 768px)");
    const result = useSelector((state) => state.searchTerm)
    const dispatch = useDispatch();
    const getHouses = useSelector(houses);
    const newHouseListing = useSelector(newListing)

    useEffect(() => {
        dispatch(fetchAllHouses());
    }, [dispatch]);

    const handleChange = (e) => {
        dispatch(filteredListing(e.target.value));
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
                                value={result}
                            />
                        </SearchForm>
                        <HouseSorting getHouses={getHouses} />
                    </Flex>
                    {getHouses.length === 0 ? <EmptyState /> :
                        <p>{getHouses.length} results found</p>}
                </FlexWrapper>
            </StyledContainer>
            <HouseOverView getHouses={getHouses} newHouseListing={newHouseListing} />
        </StyledMainContainer>
    );
};

export default Home;
