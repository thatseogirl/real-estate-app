import { axiosClient } from "../../axiosRequest/ApiClient";
import {
    FETCH_LISTING,
    ADD_LISTING,
    DELETE_LISTING,
    HANDLE_PRICE,
    HANDLE_SIZE,
    SEARCH_LISTING,
} from "./types";

export const fetchAllHouses = () => async (dispatch) => {
    try {
        const res = await axiosClient.get("/houses");
        dispatch({
            type: FETCH_LISTING,
            payload: res.data,
        });
    } catch (error) {
        console.error(error);
    }
};

export const addNewListing = (houseData) => async (dispatch) => {
    try {
        const res = await axiosClient.post("/houses", houseData);
        dispatch({
            type: ADD_LISTING,
            payload: res.data,
        });
    } catch (error) {
        console.log(error);
    }
};

export const removeListing = (getId) => async (dispatch) => {
    try {
        const res = await axiosClient.delete(`/houses/${getId}`);
        dispatch({
            type: DELETE_LISTING,
            payload: res.data,
        });
    } catch (error) {
        console.log(error);
    }
};
export const sortByPrice = (value) => {
    return {
        type: HANDLE_PRICE,
        payload: value,
    };
};
export const sortBySize = (value) => {
    return {
        type: HANDLE_SIZE,
        payload: value,
    };
};
export const filteredListing = (value) => {
    return {
        type: SEARCH_LISTING,
        payload: value,
    };
};

export const houses = (state) => state.houseListing.getHouses;
export const newListing = (state) => state.houseListing.addHouse;
