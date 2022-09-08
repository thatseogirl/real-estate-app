import { Link } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi"
import { StyledContainer } from "../assets/styles/Container.styled"
import { StyledCard, CardImage } from "../assets/styles/resuable.styled"

const Details = () => {
    return (
        <StyledContainer style={{ padding: "7em 0" }}>
            <Link to="/" className='back_link'>
                <BiArrowBack className='back_link_img' />Back to Overview</Link>
            <StyledCard>
                <CardImage src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="house" />
            </StyledCard>
        </StyledContainer>
    )
}

export default Details