// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function OrderDetailsListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_ORDERDETAILS_SUCCESS:
      return { ...state, orderdetails: action.payload };
    case types.LIST_ORDERDETAILS_SUCCESS:
      return { ...state, listOrderDetails: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}