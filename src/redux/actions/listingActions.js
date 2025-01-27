import { axiosClient } from "../../axiosRequest/ApiClient";
import {
  FETCH_LISTING,
  ADD_LISTING,
  DELETE_LISTING,
  HANDLE_PRICE,
  HANDLE_SIZE,
  SEARCH_LISTING,
} from "./types";

// Fetch all house listings
export const fetchAllHouses = () => async (dispatch) => {
  try {
    const res = await axiosClient.get("/houses");
    dispatch({
      type: FETCH_LISTING,
      payload: res.data, // Store all houses in the state
    });
  } catch (error) {
    console.error("Error fetching houses:", error);
  }
};

// Add a new house listing and update the state with the new listing
export const addNewListing = (houseData) => async (dispatch, getState) => {
  try {
    const res = await axiosClient.post("/houses", houseData);

    // Get the current house listings and add the new one to the list
    const updatedHouses = [...getState().houseListing.getHouses, res.data];
    dispatch({
      type: ADD_LISTING,
      payload: updatedHouses, // Update with the new full list including the new listing
    });
  } catch (error) {
    console.error("Error adding new listing:", error);
  }
};

// Remove a house listing by ID and update the state
export const removeListing = (getId) => async (dispatch, getState) => {
  try {
    await axiosClient.delete(`/houses/${getId}`);

    // Filter out the deleted house from the current state
    const updatedHouses = getState().houseListing.getHouses.filter(
      (house) => house.id !== getId
    );
    dispatch({
      type: DELETE_LISTING,
      payload: updatedHouses, // Update the state with the filtered list
    });
  } catch (error) {
    console.error("Error removing listing:", error);
  }
};

// Sort listings by price
export const sortByPrice = (value) => {
  return {
    type: HANDLE_PRICE,
    payload: value,
  };
};

// Sort listings by size
export const sortBySize = (value) => {
  return {
    type: HANDLE_SIZE,
    payload: value,
  };
};

// Filter house listings by search term
export const filteredListing = (value) => {
  return {
    type: SEARCH_LISTING,
    payload: value,
  };
};

// Selectors to get houses and new listings from the state
export const houses = (state) => state.houseListing.getHouses;
export const newListing = (state) => state.houseListing.addHouse;
