import { Flex } from "../../styles/Header.styled";
import { useSelector } from "react-redux";
import { houses, newListing } from "../../store/actions/listingActions";
import {
  House,
  StyledAside,
  Price,
  Location,
  WrapperFlexItem,
  StyledMargin,
  HouseWrapper,
} from "../../styles/reusable.styled";
import EditDelete from "../ListingActions/ListingActions";
import { Link } from "react-router-dom";
import {
  MdBathroom,
  MdOutlineBedroomParent,
  MdCropSquare,
} from "react-icons/md";
import useMediaQuery from "../../hooks/useMediaQuery";

const HouseListing = () => {
  const getHouses = useSelector(houses);
  const newHouseListing = useSelector(newListing);
  const breakPoint = useMediaQuery("(max-width: 768px)");

  // Determine which list to render (prioritize new listings if available)
  const houseData = newHouseListing?.length > 0 ? newHouseListing : getHouses;
  const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "EUR",
    style: "currency",
  });

  return (
    <>
      {houseData &&
        houseData.length > 0 &&
        houseData.map((data) => (
          <HouseWrapper key={data.id}>
            <Flex>
              <WrapperFlexItem>
                <div>
                  <Link to={`/details/${data.id}`}>
                    <House src={data.image} alt="home" />
                  </Link>
                </div>
                <div>
                  <Link to={`/details/${data.id}`} className="detail_link">
                    {data.streetName}
                  </Link>
                  <StyledMargin style={{ gap: "0.25em" }}>
                    <Price>{CURRENCY_FORMATTER.format(data.price)}</Price>
                  </StyledMargin>
                  <Location>
                    {data.city} {data.zip}
                  </Location>
                  <Flex
                    style={{
                      gap: breakPoint ? "0.25em" : "0.75em",
                      marginTop: breakPoint ? "0.25em" : "0.75em",
                    }}
                  >
                    <StyledAside>
                      <MdBathroom className="image" />
                      <span>{data.bathrooms}</span>
                    </StyledAside>
                    <StyledAside>
                      <MdOutlineBedroomParent className="image" />
                      <span>{data.bedrooms}</span>
                    </StyledAside>
                    <StyledAside>
                      <MdCropSquare className="image" />
                      <span>
                        {data.size}m<sup>2</sup>
                      </span>
                    </StyledAside>
                  </Flex>
                </div>
              </WrapperFlexItem>
              <EditDelete id={data.id} />
            </Flex>
          </HouseWrapper>
        ))}
    </>
  );
};

export default HouseListing;
