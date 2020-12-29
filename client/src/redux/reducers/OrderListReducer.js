// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function OrderListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_ORDER_SUCCESS:
      return { ...state, order: action.payload };
    case types.LIST_ORDER_SUCCESS:
      return { ...state, listOrder: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}