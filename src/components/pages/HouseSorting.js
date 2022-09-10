import React from "react";
import { Flex } from "../../assets/styles/Header.styled";
import Button from "../reusableComponents/Button";
import useMediaQuery from "../hooks/useMediaQuery";

export default function HouseSorting() {
    const breakPoint = useMediaQuery("(max-width: 768px)");
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
                    bgColor='#c3c3c3'
                />
                <Button width={breakPoint ? "100%" : ""} text='Size' bgColor='orange' />
            </Flex>
        </div>
    );
}
