import { Flex } from "../../assets/styles/Header.styled"
import { Link } from "react-router-dom"
import { MdModeEditOutline, MdDelete } from "react-icons/md"

const EditDelete = () => {
    return (
        <Flex style={{ padding: "0.5em 0.75em", gap: "0.5em" }}>
            <Link to="/editListing">
                <MdModeEditOutline color="orange" cursor="pointer" className="image" /></Link>
            <MdDelete cursor="pointer" className="image" />
        </Flex>
    )

}

export default EditDelete