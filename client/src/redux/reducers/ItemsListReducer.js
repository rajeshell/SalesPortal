// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function ItemsListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_ITEMS_SUCCESS:
      return { ...state, items: action.payload };
    case types.LIST_ITEMS_SUCCESS:
      return { ...state, listItems: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}