import { axiosClient } from "../../axiosRequest/ApiClient"
import {
    FETCH_LISTING,
    ADD_LISTING
} from "./types"

export const fetchAllHouses = () => async dispatch => {
    try {
        const res = await axiosClient.get("/houses")
        const data = res.json();
        console.log(data);
        dispatch({
            type: FETCH_LISTING,
            payload: await data,
        })
    } catch (error) {
        console.error(error);
    }

}




export const houses = state => state.houseListing.getHouses
