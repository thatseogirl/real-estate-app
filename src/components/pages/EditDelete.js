import { Flex } from "../../assets/styles/Header.styled";
import { Link } from "react-router-dom";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import Modal from "../reusableComponents/Modal";

import { useState } from "react";

const EditDelete = ({ id }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleClick = () => {
        setModalOpen(!modalOpen);
    };
    return (
        <>
            <Flex style={{ padding: "0.5em 0.75em", gap: "0.5em" }}>
                <Link to={`/editListing/${id}`}>
                    <MdModeEditOutline
                        color='orange'
                        cursor='pointer'
                        className='image'
                    />
                </Link>
                <MdDelete cursor='pointer' className='image' onClick={handleClick} />
                <Modal
                    modalOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    id={id}
                />
            </Flex>
        </>
    );
};

export default EditDelete;
