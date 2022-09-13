import {
    FETCH_LISTING,
    ADD_LISTING
} from "../actions/types"

const initialState = {
    getHouses: [],
    addHouse: {}
}

function houseListingReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_LISTING: {
            return {
                ...state,
                getHouses: [action.payload]
            }
        }
        case ADD_LISTING: {
            return {
                ...state,
                addHouse: [action.payload]
            }
        }
        default:
            return state;
    }
}

export default houseListingReducer



