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

const Details = () => {

    const breakPoint = useMediaQuery("(max-width: 768px)");
    return (
        <StyledContainer style={{ padding: breakPoint ? "2em 0" : "7em 0" }}>
            <Link to='/' className='back_link'>
                <BiArrowBack className='back_link_img' />
                Back to Overview
            </Link>
            <StyledCard>
                <CardImage
                    src='https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='house'
                />
                <CardBody>
                    <div>
                        <Flex>
                            <CardText>Fass Wilkestraat</CardText>
                            <EditDelete />
                        </Flex>
                        <CardFlexItem>
                            <GoLocation className='image' />
                            <span>1363VV</span>
                            <span>Almere</span>
                        </CardFlexItem>

                        <CardFlexItem style={{ marginTop: "0.25em" }}>
                            <StyledMargin>
                                <AiOutlineEuroCircle className='image' />
                                <span>475,000</span>
                            </StyledMargin>
                            <StyledMargin style={{ marginLeft: "0.5em" }}>
                                <MdCropSquare className='image' />
                                <span>65m<sup>2</sup></span>
                            </StyledMargin>
                            <StyledMargin style={{ marginLeft: "0.5em" }}>
                                <AiOutlineHome className='image' />
                                <span>2022</span>
                            </StyledMargin>
                        </CardFlexItem>
                        <CardFlexItem style={{ marginTop: "0.25em" }}>
                            <StyledMargin>
                                <MdOutlineBedroomParent className='image' />
                                <span>4</span>
                            </StyledMargin>
                            <StyledMargin style={{ marginLeft: "0.5em" }}>
                                <MdBathroom className='image' />
                                <span>2</span>
                            </StyledMargin>
                            <StyledMargin style={{ marginLeft: "0.5em" }}>
                                <MdGarage className='image' />
                                <span>Yes</span>
                            </StyledMargin>
                        </CardFlexItem>
                        <CardDescription>
                            <p>
                                De woning is gelegen in een Rijksmonument aan het begin van de
                                Spuistraat net om de hoek bij het oude Kattegat en de
                                Koepelkerk. De ligging van het pand is ideaal. Op loopafstand
                                van het Centraal Station maar ook van o.a. de Kalverstraat en
                                Nieuwendijk met een diversiteit aan winkels. En om de hoek treft
                                u een supermarkt waar u terecht kunt voor de dagelijkse
                                boodschappen.
                            </p>
                        </CardDescription>
                    </div>
                </CardBody>
            </StyledCard>
        </StyledContainer>
    );
};

export default Details;
