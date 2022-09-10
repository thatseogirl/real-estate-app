import { StyledContainer } from "../../assets/styles/Container.styled"
import HouseListing from "./HouseListing"

const HouseOverView = () => {
    return (
        <StyledContainer>
            <HouseListing />
            <HouseListing />
            <HouseListing />
            <HouseListing />
        </StyledContainer>
    )
}

export default HouseOverView