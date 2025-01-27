import {
  FETCH_LISTING,
  ADD_LISTING,
  DELETE_LISTING,
  SEARCH_LISTING,
  HANDLE_PRICE,
  HANDLE_SIZE,
} from "../actions/types";

const initialState = {
  getHouses: [], // Stores all house listings
  addHouse: {}, // Stores the latest added house
  searchTerm: "", // Stores the search input for filtering
};

function houseListingReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LISTING: {
      return {
        ...state,
        getHouses: action.payload,
      };
    }

    case ADD_LISTING: {
      return {
        ...state,
        getHouses: action.payload, // Add new house to the existing array
        addHouse: action.payload, // Store the newly added house separately if needed
      };
    }

    case DELETE_LISTING: {
      return {
        ...state,
        getHouses: action.payload,
        addHouse: action.payload, // Remove house by ID
      };
    }

    case SEARCH_LISTING: {
      const filteredHouses =
        action.payload === ""
          ? state.getHouses
          : state.getHouses.filter(
              (item) =>
                item.city
                  .toLowerCase()
                  .includes(action.payload.toLowerCase()) ||
                item.streetName
                  .toLowerCase()
                  .includes(action.payload.toLowerCase())
            );

      return {
        ...state,
        searchTerm: action.payload,
        getHouses: filteredHouses,
      };
    }

    case HANDLE_PRICE: {
      return {
        ...state,
        getHouses: [...state.getHouses].sort((a, b) => a.price - b.price), // Sort by price (ascending)
      };
    }

    case HANDLE_SIZE: {
      return {
        ...state,
        getHouses: [...state.getHouses].sort((a, b) => a.size - b.size), // Sort by size (ascending)
      };
    }

    default:
      return state;
  }
}

export default houseListingReducer;
