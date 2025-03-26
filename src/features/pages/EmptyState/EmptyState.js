import React from 'react'
import { EmptyHouse } from '../../../styles/reusable.styled'
import { StyledContainer } from '../../../styles/Container.styled'

const EmptyState = () => {
    return (
        <StyledContainer>
            <EmptyHouse>
                <img src='https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' alt='empty house'
                    className="input_image"
                />
                <p>No result found. <br />Please try another keyword.</p>
            </EmptyHouse>
        </StyledContainer>
    )
}

export default EmptyState