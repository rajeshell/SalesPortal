// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  items: {}
};

// Reducer
export default function ItemsEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_ITEMS_SUCCESS:
      return { ...state, items: action.payload };
    case types.UPDATE_ITEMS_SUCCESS:
      return { ...state, items: action.payload };
    case types.GET_ITEMS_SUCCESS:
      return { ...state, items: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}