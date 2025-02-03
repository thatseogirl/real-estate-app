/* eslint-disable eqeqeq */
import { React, useState } from "react";
import FormComponent from "../reusableComponents/FormComponent";
import { houses, fetchAllHouses } from "../redux/actions/listingActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function EditListing() {
    const [isEditing, setIsEditing] = useState(false);
    const editListing = () => {
        setIsEditing(!isEditing);
    };
    const { id } = useParams();
    const dispatch = useDispatch();
    const getHouses = useSelector(houses);
    const getCurrentHouse = getHouses.filter((element) => element.id == id);
    useEffect(() => {
        dispatch(fetchAllHouses());
    }, [dispatch]);
    return (
        <div>
            <FormComponent
                editListing={editListing}
                getCurrentHouse={getCurrentHouse}
            />
        </div>
    );
}
