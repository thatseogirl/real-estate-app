import React from "react";
import {
    ModalOverLay,
    ModalContainer,
    FlexItem,
} from "../../assets/styles/reusable.styled";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { removeListing } from "../../redux/actions/listingActions";

import { useEffect } from "react";
const Modal = ({ modalOpen, onClose, id }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(removeListing());
    }, [dispatch]);
    if (!modalOpen) {
        return null;
    }
    return (
        <ModalOverLay>
            <ModalContainer>
                <section style={{ marginBottom: "1em" }}>
                    <h4>Delete Listing</h4>
                    <div style={{ fontSize: "0.9em", marginTop: "1em" }}>
                        <p>Are you sure you want to delete this Listing?</p>
                        <p>This action cannot be undone</p>
                    </div>
                </section>
                <FlexItem style={{ marginTop: "0.75em", gap: "0" }}>
                    <Button
                        text='Yes, Delete'
                        bgColor='orange'
                        textTransform='uppercase'
                        padding='0.75em'
                        onClick={() => dispatch(removeListing(id))}
                    />
                    <Button
                        text='No, Go Back'
                        bgColor='#c3c3c3'
                        textTransform='uppercase'
                        padding='0.75em'
                        onClick={onClose}
                    />
                </FlexItem>
            </ModalContainer>
        </ModalOverLay>
    );
};

export default Modal;
