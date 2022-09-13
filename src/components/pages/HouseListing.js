import { Flex } from "../../assets/styles/Header.styled"
import { House, StyledAside, Price, Location, WrapperFlexItem, StyledMargin, HouseWrapper } from "../../assets/styles/reusable.styled"
import EditDelete from "./EditDelete"
import { Link } from "react-router-dom"
import {
    MdBathroom,
    MdOutlineBedroomParent,
    MdCropSquare,
} from "react-icons/md"
import { AiOutlineEuroCircle } from "react-icons/ai"
import useMediaQuery from "../hooks/useMediaQuery"
import { useEffect, useMemo } from "react"
import { fetchAllHouses, houses } from "../../redux/actions/listingActions"
import { useDispatch, useSelector } from "react-redux"

const HouseListing = () => {
    const breakPoint = useMediaQuery("(max-width: 768px)");
    const dispatch = useDispatch();
    const getHouses = useSelector(houses)
    // console.log(getHouse.map((data) => (
    //     data.stretName
    // )))
    useEffect(() => {
        dispatch(fetchAllHouses());
    }, [dispatch]);

    //console.log(getHouses);
    //getHouses.map((data) => console.log(data[0].id));

    return (
        <HouseWrapper>
            <Flex>
                {getHouses.map((data) => (
                    <WrapperFlexItem key={data.id}>
                        <div>
                            <Link to="/details">
                                <House src={data.image} alt="home" />
                            </Link>
                        </div>
                        <div>
                            <Link to="/details" className="detail_link">Fass Wilkestraat</Link>
                            <StyledMargin style={{ gap: "0.25em" }}>
                                <AiOutlineEuroCircle style={{ marginTop: "3px" }} />
                                <Price>475,000</Price>
                            </StyledMargin>
                            <Location>1363 VV Almere</Location>
                            <Flex style={{ gap: breakPoint ? "0.25em" : "0.75em", marginTop: breakPoint ? "0.25em" : "0.75em" }}>
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
                                    <span>4m<sup>2</sup></span>
                                </StyledAside>
                            </Flex>
                        </div>
                    </WrapperFlexItem>
                ))}
                <EditDelete />
            </Flex>
        </HouseWrapper>
    )
}

export default HouseListing