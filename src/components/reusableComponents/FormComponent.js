import React from 'react'
import { Link } from 'react-router-dom'
import useMediaQuery from '../hooks/useMediaQuery'
import { BiArrowBack } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'
import { FlexItem, StyledBox, ValidationError, FormWidth } from '../../assets/styles/reusable.styled'
import { StyledContainer, StyledFormWrapper } from '../../assets/styles/Container.styled'
import Button from './Button'

const FormComponent = ({ editListing }) => {
    const breakPoint = useMediaQuery("(max-width: 768px)");
    return (
        <StyledFormWrapper>
            <StyledContainer style={{
                padding: breakPoint ? "2em" : "7em 2.5em",
                minHeight: breakPoint ? "1950px" : ""
            }}>
                <Link to="/" className='back_link'><BiArrowBack className='back_link_img' />Back to Overview</Link>
                <FormWidth>
                    <h3>{editListing ? "Edit Listing" : "Create New Listing"}</h3>
                    <form style={{ marginTop: "2em" }}>
                        <FlexItem>
                            <label htmlFor="streetName">Street name*</label>
                            <input
                                type="text"
                                v-model="formData.streetName"
                                name="streetName"
                                placeholder="Enter the street name"
                            />
                        </FlexItem>

                        <FlexItem>
                            <label htmlFor="houseNumber">House Number*</label>
                            <input
                                type="text"
                                v-model="formData.houseNumber"
                                name="houseNumber"
                                placeholder="Enter house number"

                            />
                        </FlexItem>

                        <FlexItem>
                            <label htmlFor="numberAddition">Addition (optional)</label>
                            <input
                                type="text"
                                v-model="formData.numberAddition"
                                name="numberAddition"
                                placeholder="e.g A"
                            />
                        </FlexItem>

                        <FlexItem>
                            <label htmlFor="postalCode">Postal code*</label>
                            <input
                                type="text"
                                v-model="formData.zip"
                                name="zip"
                                placeholder="e.g 1000 AA"
                            />
                        </FlexItem>

                        <FlexItem>
                            <label htmlFor="city">City*</label>
                            <input
                                type="text"
                                v-model="formData.city"
                                name="city"
                                placeholder="e.g Utrecht"
                            />
                        </FlexItem>

                        {/* <!-- createListing image --> */}
                        <FlexItem>
                            <div className="image-upload">
                                <label htmlFor="file-input"
                                >Upload Image (PNG OR JPG)*
                                    <StyledBox>
                                        <AiOutlinePlus className="box_img" />
                                    </StyledBox>
                                </label>

                                <input
                                    id="file-input"
                                    type="file"
                                    name="upload"
                                    accept=" .png, .jpg, .jpeg"
                                />
                            </div>
                        </FlexItem>

                        {/* <!-- editListing image --> */}
                        {/* <FlexItem>
                            <div className="image-upload">
                                <label htmlFor="file-input"
                                >Upload Image (PNG OR JPG)*
                                    <StyledBox>
                                        <AiOutlinePlus className="box_img" />
                                    </StyledBox>
                                </label>

                                <input
                                    id="file-input"
                                    type="file"
                                    name="upload"
                                    accept=" .png, .jpg, .jpeg"
                                />
                            </div>
                        </FlexItem> */}

                        <FlexItem>
                            <label htmlFor="price">Price*</label>
                            <input
                                type="number"
                                name="price"
                                placeholder="e.g €150.000"
                            />
                        </FlexItem>

                        <FlexItem>
                            <label htmlFor="size">Size*</label>
                            <input
                                type="text"
                                name="size"
                                placeholder="e.g 60m2"
                            />
                        </FlexItem>

                        {/* <!-- createListing houseGarage --> */}
                        <FlexItem >
                            <label htmlFor="garage">Garage*</label>
                            <select
                                style={{ cursor: "pointer" }}
                                name="garage"
                                id="select"
                            >
                                <option value="" selected>Select</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </FlexItem>
                        {/* <!-- editListing houseGarage --> */}
                        {/* <FlexItem>
                                <label htmlFor="garage">Garage*</label>
                                <select
                                    style={{ cursor: "pointer" }}
                                    name="garage"
                                    id="select"
                                >
                                    <option value="" >Select</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </FlexItem> */}

                        <FlexItem>
                            <label htmlFor="bedrooms">Bedrooms*</label>
                            <input
                                type="text"
                                name="bedrooms"
                                placeholder="Enter amount"
                            />
                        </FlexItem>

                        <FlexItem>
                            <label htmlFor="bathrooms">Bathrooms*</label>
                            <input
                                type="text"
                                name="bathrooms"
                                placeholder="Enter amount"
                            />
                        </FlexItem>

                        <FlexItem>
                            <label htmlFor="constructionDate">Construction date*</label>
                            <input
                                type="text"
                                name="constructionYear"
                                placeholder="e.g 1990"
                            />
                        </FlexItem>

                        <FlexItem>
                            <label htmlFor="description">Description*</label>
                            <textarea
                                placeholder="Enter description"
                            ></textarea>
                        </FlexItem>
                        <ValidationError>Required field missing</ValidationError>
                        <Button
                            text={editListing ? "Save" : "Post"}
                            textTransform="uppercase"
                            float={breakPoint ? "" : "right"}
                            padding="1em 5em"
                            bgColor="orange"
                            width={breakPoint ? "100%" : ""}
                        />
                    </form>
                </FormWidth>

            </StyledContainer>
        </StyledFormWrapper>
    )
}
export default FormComponent