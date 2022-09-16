import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useMediaQuery from "../hooks/useMediaQuery";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import {
    FlexItem,
    StyledBox,
    ValidationError,
    FormWidth,
} from "../../assets/styles/reusable.styled";
import {
    StyledContainer,
    StyledFormWrapper,
} from "../../assets/styles/Container.styled";
import Button from "./Button";
import { addNewListing } from "../../redux/actions/listingActions";

const FormComponent = ({ editListing, getCurrentHouse }) => {
    const navigate = useNavigate();
    const breakPoint = useMediaQuery("(max-width: 768px)");
    const dispatch = useDispatch();
    const [addListing, setAddListing] = useState({
        streetName: "",
        houseNumber: "",
        addition: "",
        zip: "",
        city: "",
        image: "",
        price: "",
        size: "",
        hasGarage: "",
        bedrooms: "",
        bathrooms: "",
        constructionYear: "",
        description: "",
    });
    const handleChange = (event) => {
        setAddListing(
            {
                ...addListing,
                [event.target.name]: event.target.value,
            },
            [addListing]
        );
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addNewListing(addListing));
        navigate("/")
    };
    const handleEdit = (event) => {
        event.preventDefault();
        navigate("/")
    };
    return (
        <StyledFormWrapper>
            {editListing ? (
                getCurrentHouse.map((house) => (
                    <StyledContainer
                        style={{
                            padding: breakPoint ? "2em" : "7em 2.5em",
                            minHeight: breakPoint ? "1950px" : "",
                        }}
                    >
                        <Link to='/' className='back_link'>
                            <BiArrowBack className='back_link_img' />
                            Back to Overview
                        </Link>
                        <FormWidth>
                            <h3>Edit Listing</h3>
                            <form style={{ marginTop: "2em" }} onSubmit={handleEdit}>
                                <FlexItem>
                                    <label htmlFor='streetName'>Street name*</label>
                                    <input
                                        type='text'
                                        onChange={handleChange}
                                        value={house.streetName}
                                        name='streetName'
                                        placeholder='Enter the street name'
                                    />
                                </FlexItem>

                                <FlexItem>
                                    <label htmlFor='houseNumber'>House Number*</label>
                                    <input
                                        type='text'
                                        onChange={handleChange}
                                        value={house.houseNumber}
                                        name='houseNumber'
                                        placeholder='Enter house number'
                                    />
                                </FlexItem>

                                <FlexItem>
                                    <label htmlFor='numberAddition'>Addition (optional)</label>
                                    <input
                                        type='text'
                                        onChange={handleChange}
                                        value={house.addition}
                                        name='numberAddition'
                                        placeholder='e.g A'
                                    />
                                </FlexItem>

                                <FlexItem>
                                    <label htmlFor='postalCode'>Postal code*</label>
                                    <input
                                        type='text'
                                        onChange={handleChange}
                                        value={house.zip}
                                        name='zip'
                                        placeholder='e.g 1000 AA'
                                    />
                                </FlexItem>

                                <FlexItem>
                                    <label htmlFor='city'>City*</label>
                                    <input
                                        type='text'
                                        onChange={handleChange}
                                        value={house.city}
                                        name='city'
                                        placeholder='e.g Utrecht'
                                    />
                                </FlexItem>

                                <FlexItem>
                                    <div className='image-upload'>
                                        <label htmlFor='file-input'>
                                            Upload Image (PNG OR JPG)*
                                            <StyledBox>
                                                <AiOutlinePlus className='box_img' />
                                            </StyledBox>
                                        </label>

                                        <input
                                            id='file-input'
                                            type='file'
                                            name='upload'
                                            accept=' .png, .jpg, .jpeg'
                                        />
                                    </div>
                                </FlexItem>
                                <FlexItem>
                                    <label htmlFor='price'>Price*</label>
                                    <input
                                        type='number'
                                        name='price'
                                        onChange={handleChange}
                                        value={house.price}
                                        placeholder='e.g €150.000'
                                    />
                                </FlexItem>

                                <FlexItem>
                                    <label htmlFor='size'>Size*</label>
                                    <input
                                        type='text'
                                        name='size'
                                        onChange={handleChange}
                                        value={house.size}
                                        placeholder='e.g 60m2'
                                    />
                                </FlexItem>

                                <FlexItem>
                                    <label htmlFor='garage'>Garage*</label>
                                    <select
                                        style={{ cursor: "pointer" }}
                                        name='garage'
                                        onChange={handleChange}
                                        value={house.hasGarage}
                                        id='select'
                                    >
                                        <option value='' disabled>
                                            Select
                                        </option>
                                        <option value='yes'>Yes</option>
                                        <option value='no'>No</option>
                                    </select>
                                </FlexItem>

                                <FlexItem>
                                    <label htmlFor='bedrooms'>Bedrooms*</label>
                                    <input
                                        type='text'
                                        name='bedrooms'
                                        onChange={handleChange}
                                        value={house.bedrooms}
                                        placeholder='Enter amount'
                                    />
                                </FlexItem>

                                <FlexItem>
                                    <label htmlFor='bathrooms'>Bathrooms*</label>
                                    <input
                                        type='text'
                                        name='bathrooms'
                                        onChange={handleChange}
                                        value={house.bathrooms}
                                        placeholder='Enter amount'
                                    />
                                </FlexItem>

                                <FlexItem>
                                    <label htmlFor='constructionYear'>Construction Year*</label>
                                    <input
                                        type='text'
                                        name='constructionYear'
                                        onChange={handleChange}
                                        value={house.constructionYear}
                                        placeholder='e.g 1990'
                                    />
                                </FlexItem>

                                <FlexItem>
                                    <label htmlFor='description'>Description*</label>
                                    <textarea
                                        placeholder='Enter description'
                                        onChange={handleChange}
                                        value={house.description}
                                        name='description'
                                    ></textarea>
                                </FlexItem>
                                <ValidationError>Required field missing</ValidationError>
                                <Button
                                    text='Save'
                                    textTransform='uppercase'
                                    float={breakPoint ? "" : "right"}
                                    padding='1em 5em'
                                    bgColor='orange'
                                    width={breakPoint ? "100%" : ""}
                                />
                            </form>
                        </FormWidth>
                    </StyledContainer>
                ))
            ) : (
                <StyledContainer
                    style={{
                        padding: breakPoint ? "2em" : "7em 2.5em",
                        minHeight: breakPoint ? "1950px" : "",
                    }}
                >
                    <Link to='/' className='back_link'>
                        <BiArrowBack className='back_link_img' />
                        Back to Overview
                    </Link>
                    <FormWidth>
                        <h3>{editListing ? "Edit Listing" : "Create New Listing"}</h3>
                        <form style={{ marginTop: "2em" }} onSubmit={handleSubmit}>
                            <FlexItem>
                                <label htmlFor='streetName'>Street name*</label>
                                <input
                                    type='text'
                                    onChange={handleChange}
                                    value={addListing.streetName}
                                    name='streetName'
                                    placeholder='Enter the street name'
                                />
                            </FlexItem>

                            <FlexItem>
                                <label htmlFor='houseNumber'>House Number*</label>
                                <input
                                    type='text'
                                    onChange={handleChange}
                                    value={addListing.houseNumber}
                                    name='houseNumber'
                                    placeholder='Enter house number'
                                />
                            </FlexItem>

                            <FlexItem>
                                <label htmlFor='addition'>Addition (optional)</label>
                                <input
                                    type='text'
                                    onChange={handleChange}
                                    value={addListing.addition}
                                    name='addition'
                                    placeholder='e.g A'
                                />
                            </FlexItem>

                            <FlexItem>
                                <label htmlFor='zip'>Postal code*</label>
                                <input
                                    type='text'
                                    onChange={handleChange}
                                    value={addListing.zip}
                                    name='zip'
                                    placeholder='e.g 1000 AA'
                                />
                            </FlexItem>

                            <FlexItem>
                                <label htmlFor='city'>City*</label>
                                <input
                                    type='text'
                                    onChange={handleChange}
                                    value={addListing.city}
                                    name='city'
                                    placeholder='e.g Utrecht'
                                />
                            </FlexItem>

                            <FlexItem>
                                <div className='image-upload'>
                                    <label htmlFor='file-input'>
                                        Upload Image (PNG OR JPG)*
                                        <StyledBox>
                                            <AiOutlinePlus className='box_img' />
                                        </StyledBox>
                                    </label>

                                    <input
                                        id='file-input'
                                        type='file'
                                        name='upload'
                                        accept=' .png, .jpg, .jpeg'
                                    />
                                </div>
                            </FlexItem>

                            <FlexItem>
                                <label htmlFor='price'>Price*</label>
                                <input
                                    type='number'
                                    name='price'
                                    onChange={handleChange}
                                    value={addListing.price}
                                    placeholder='e.g €150.000'
                                />
                            </FlexItem>

                            <FlexItem>
                                <label htmlFor='size'>Size*</label>
                                <input
                                    type='text'
                                    name='size'
                                    onChange={handleChange}
                                    value={addListing.size}
                                    placeholder='e.g 60m2'
                                />
                            </FlexItem>
                            <FlexItem>
                                <label htmlFor='garage'>Garage*</label>
                                <select
                                    style={{ cursor: "pointer" }}
                                    name='garage'
                                    onChange={handleChange}
                                    value={addListing.hasGarage}
                                    id='select'
                                >
                                    <option value='' disabled>
                                        Select
                                    </option>
                                    <option value='yes'>Yes</option>
                                    <option value='no'>No</option>
                                </select>
                            </FlexItem>

                            <FlexItem>
                                <label htmlFor='bedrooms'>Bedrooms*</label>
                                <input
                                    type='text'
                                    name='bedrooms'
                                    onChange={handleChange}
                                    value={addListing.bedrooms}
                                    placeholder='Enter amount'
                                />
                            </FlexItem>

                            <FlexItem>
                                <label htmlFor='bathrooms'>Bathrooms*</label>
                                <input
                                    type='text'
                                    name='bathrooms'
                                    onChange={handleChange}
                                    value={addListing.bathrooms}
                                    placeholder='Enter amount'
                                />
                            </FlexItem>

                            <FlexItem>
                                <label htmlFor='constructionYear'>Construction Year*</label>
                                <input
                                    type='text'
                                    name='constructionYear'
                                    onChange={handleChange}
                                    value={addListing.constructionYear}
                                    placeholder='e.g 1990'
                                />
                            </FlexItem>

                            <FlexItem>
                                <label htmlFor='description'>Description*</label>
                                <textarea
                                    placeholder='Enter description'
                                    onChange={handleChange}
                                    value={addListing.description}
                                    name='description'
                                ></textarea>
                            </FlexItem>
                            <ValidationError>Required field missing</ValidationError>
                            <Button
                                text='Post'
                                textTransform='uppercase'
                                float={breakPoint ? "" : "right"}
                                padding='1em 5em'
                                bgColor='orange'
                                width={breakPoint ? "100%" : ""}
                            />
                        </form>
                    </FormWidth>
                </StyledContainer>
            )}
        </StyledFormWrapper>
    );
};
export default FormComponent;
