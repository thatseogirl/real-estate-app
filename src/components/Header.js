import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import Button from './reusableComponents/Button'
import { Flex, StyledHeader } from '../assets/styles/Header.styled'
import { StyledContainer } from '../assets/styles/Container.styled'


const Header = () => {
    return (
        <StyledHeader>
            <StyledContainer>
                <Flex>
                    <h3>Houses</h3>
                    <div>
                        <Link to='/createListing' className='new_listing_link'>
                            <FiPlus style={{
                                width: '40px',
                                height: '40px',
                                color: '#fff'
                            }} />
                            <Button
                                text="Create New"
                                color="#fff"
                                padding="0"
                                bgColor="transparent"
                                textTransform="uppercase"
                            />
                        </Link>
                    </div>
                </Flex>
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header
