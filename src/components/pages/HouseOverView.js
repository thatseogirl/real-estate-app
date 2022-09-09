import { StyledContainer } from "../../assets/styles/Container.styled"
import { Flex } from "../../assets/styles/Header.styled"
import { House, HouseWrapper, StyledAside, Price, Location, WrapperFlexItem, StyledMargin } from "../../assets/styles/resuable.styled"
import EditDelete from "./EditDelete"
import { Link } from "react-router-dom"
import {
    MdBathroom,
    MdOutlineBedroomParent,
    MdCropSquare,
} from "react-icons/md"
import { AiOutlineEuroCircle } from "react-icons/ai"

const HouseOverView = () => {
    return (
        <StyledContainer>
            <HouseWrapper>
                <Flex>
                    <WrapperFlexItem>
                        <div>
                            <Link to="/details">
                                <House src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="home" />
                            </Link>
                        </div>
                        <div>
                            <Link to="/details" className="detail_link">Fass Wilkestraat</Link>
                            <StyledMargin style={{ gap: "0.25em" }}>
                                <AiOutlineEuroCircle style={{ marginTop: "3px" }} />
                                <Price>475,000</Price>
                            </StyledMargin>
                            <Location>1363 VV Almere</Location>
                            <Flex style={{ gap: "0.75em", marginTop: "0.75em" }}>
                                <StyledAside>
                                    <MdBathroom className="image" />
                                    <span>2</span>
                                </StyledAside>
                                <StyledAside>
                                    <MdOutlineBedroomParent className="image" />
                                    <span>4</span>
                                </StyledAside>
                                <StyledAside>
                                    <MdCropSquare className="image" />
                                    <span>4 m2  </span>
                                </StyledAside>
                            </Flex>
                        </div>
                    </WrapperFlexItem>

                    <EditDelete />
                </Flex>
            </HouseWrapper>
        </StyledContainer>
    )
}

export default HouseOverView