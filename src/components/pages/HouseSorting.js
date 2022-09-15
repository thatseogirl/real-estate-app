import React from "react";
import { Flex } from "../../assets/styles/Header.styled";
import { useDispatch } from "react-redux";
import Button from "../reusableComponents/Button";
import useMediaQuery from "../hooks/useMediaQuery";
import { sortByPrice, sortBySize } from "../../redux/actions/listingActions";
import { useState } from "react";

export default function HouseSorting({ getHouses }) {
    const dispatch = useDispatch();
    const breakPoint = useMediaQuery("(max-width: 768px)");
    const [sortPrice, setSortPrice] = useState(false);
    const [sortSize, setSortSize] = useState(false);

    const handlePrice = () => {
        dispatch(sortByPrice());
        setSortSize(false);
        setSortPrice(true);
    };
    const handleSize = () => {
        dispatch(sortBySize());
        setSortSize(true);
        setSortPrice(false);
    };

    return (
        <div>
            <Flex style={{ justifyContent: breakPoint ? "start" : "" }}>
                <Button
                    width={breakPoint ? "100%" : ""}
                    text='Price'
                    className='btn_price'
                    borderRadius='10px 0px 0px 10px'
                    position={breakPoint ? "" : "relative"}
                    left={breakPoint ? "" : "20px"}
                    bgColor={sortPrice ? "orange" : "#c3c3c3"}
                    onClick={handlePrice}
                />
                <Button
                    width={breakPoint ? "100%" : ""}
                    text='Size'
                    bgColor={sortSize ? "orange" : "#c3c3c3"}
                    onClick={handleSize}
                />
            </Flex>
        </div>
    );
}
