import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import EditDelete from "../components//pages/EditDelete";
import { StyledContainer } from "../assets/styles/Container.styled";
import {
    StyledCard,
    CardImage,
    CardBody,
    CardText,
    CardDescription,
    StyledMargin,
    CardFlexItem,
} from "../assets/styles/reusable.styled";
import { Flex } from "../assets/styles/Header.styled";
import { GoLocation } from "react-icons/go";
import {
    MdCropSquare,
    MdBathroom,
    MdOutlineBedroomParent,
    MdGarage,
} from "react-icons/md";
import { AiOutlineEuroCircle, AiOutlineHome } from "react-icons/ai";
import useMediaQuery from "../components/hooks/useMediaQuery";
import { houses, fetchAllHouses } from "../redux/actions/listingActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const getHouses = useSelector(houses);
    // eslint-disable-next-line eqeqeq
    const getCurrentHouse = getHouses.filter((element) => element.id == id);

    useEffect(() => {
        dispatch(fetchAllHouses());
    }, [dispatch]);

    const breakPoint = useMediaQuery("(max-width: 768px)");
    return (
        <StyledContainer style={{ padding: breakPoint ? "2em 0" : "7em 0" }}>
            <Link to='/' className='back_link'>
                <BiArrowBack className='back_link_img' />
                Back to Overview
            </Link>
            {getCurrentHouse.map((element) => (
                <StyledCard key={element.id}>
                    <CardImage src={element.image} alt='house' />
                    <CardBody>
                        <div>
                            <Flex>
                                <CardText>{element.streetName}</CardText>
                                <EditDelete />
                            </Flex>
                            <CardFlexItem>
                                <GoLocation className='image' />
                                <span>{element.zip}</span>
                                <span>{element.city}</span>
                            </CardFlexItem>

                            <CardFlexItem style={{ marginTop: "0.25em" }}>
                                <StyledMargin>
                                    <AiOutlineEuroCircle className='image' />
                                    <span>{element.price}</span>
                                </StyledMargin>
                                <StyledMargin style={{ marginLeft: "0.5em" }}>
                                    <MdCropSquare className='image' />
                                    <span>
                                        {element.size}m<sup>2</sup>
                                    </span>
                                </StyledMargin>
                                <StyledMargin style={{ marginLeft: "0.5em" }}>
                                    <AiOutlineHome className='image' />
                                    <span>{element.constructionYear}</span>
                                </StyledMargin>
                            </CardFlexItem>
                            <CardFlexItem style={{ marginTop: "0.25em" }}>
                                <StyledMargin>
                                    <MdOutlineBedroomParent className='image' />
                                    <span>{element.bedrooms}</span>
                                </StyledMargin>
                                <StyledMargin style={{ marginLeft: "0.5em" }}>
                                    <MdBathroom className='image' />
                                    <span>{element.bathrooms}</span>
                                </StyledMargin>
                                <StyledMargin style={{ marginLeft: "0.5em" }}>
                                    <MdGarage className='image' />
                                    <span>{element.hasGarage}</span>
                                </StyledMargin>
                            </CardFlexItem>
                            <CardDescription>
                                <p>{element.description}</p>
                            </CardDescription>
                        </div>
                    </CardBody>
                </StyledCard>
            ))}
        </StyledContainer>
    );
};

export default Details;
