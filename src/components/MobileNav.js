import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BsHouseDoor } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Mobile } from "../styles/reusable.styled";

const MobileNav = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    return (
        <footer>
            <Mobile>
                <ul>
                    <li>
                        <NavLink to='/'>
                            <BsHouseDoor
                                className={splitLocation[1] === "" ? "active" : "footer_img"}
                            />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>
                            <IoMdInformationCircleOutline
                                className={
                                    splitLocation[1] === "about" ? "active" : "footer_img"
                                }
                            />
                        </NavLink>
                    </li>
                </ul>
            </Mobile>
        </footer>
    );
};

export default MobileNav;
