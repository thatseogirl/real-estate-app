import {
    FETCH_LISTING,
    ADD_LISTING,
    DELETE_LISTING,
    SEARCH_LISTING,
    HANDLE_PRICE,
    HANDLE_SIZE,
} from "../actions/types";

const initialState = {
    getHouses: [],
    addHouse: {},
    searchTerm: "",
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
                addHouse: action.payload,
            };
        }
        case DELETE_LISTING: {
            return {
                getHouses: [
                    ...state.getHouses.filter((item) => item !== action.payload),
                ],
            };
        }
        case SEARCH_LISTING: {
            return {
                ...state,
                getHouses: state.searchTerm
                    ? state.getHouses.filter(
                        (item) =>
                            item.city
                                .toLowerCase()
                                .includes(state.searchTerm.toLowerCase()) ||
                            item.streetName
                                .toLowerCase()
                                .includes(state.searchTerm.toLowerCase())
                    )
                    : state.getHouses,
            };
        }
        case HANDLE_PRICE: {
            return {
                ...state,
                getHouses: state.getHouses.sort(
                    (first, second) => first.price - second.price
                ),
            };
        }
        case HANDLE_SIZE: {
            return {
                ...state,
                getHouses: state.getHouses.sort(
                    (first, second) => first.size - second.size
                ),
            };
        }

        default:
            return state;
    }
}

export default houseListingReducer;
