import React from "react";
import { Flex } from "../../assets/styles/Header.styled";
import Button from "../reusableComponents/Button";

export default function HouseSorting() {
    return (
        <div>
            <Flex>
                <Button
                    text='Price'
                    className='btn_price'
                    borderRadius='10px 0px 0px 10px'
                    position='relative'
                    left='20px'
                    bgColor="#c3c3c3"
                />
                <Button text='Size' bgColor="orange" />
            </Flex>
        </div>
    );
}
