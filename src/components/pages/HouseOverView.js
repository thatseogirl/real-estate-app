import { StyledContainer } from "../../assets/styles/Container.styled"
import { HouseWrapper } from "../../assets/styles/resuable.styled"
import HouseListing from "./HouseListing"

const HouseOverView = () => {
    return (
        <StyledContainer>
            <HouseWrapper>
                <HouseListing />
                <HouseListing />
                <HouseListing />
                <HouseListing />
            </HouseWrapper>
        </StyledContainer>
    )
}

export default HouseOverView