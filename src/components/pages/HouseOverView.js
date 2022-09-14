import { StyledContainer } from "../../assets/styles/Container.styled";
import HouseListing from "./HouseListing";

const HouseOverView = ({ getHouses, newHouseListing }) => {
    return (
        <StyledContainer>
            <HouseListing getHouses={getHouses} newHouseListing={newHouseListing} />
        </StyledContainer>
    );
};

export default HouseOverView;
