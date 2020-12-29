// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  orderdetails: {}
};

// Reducer
export default function OrderDetailsEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_ORDERDETAILS_SUCCESS:
      return { ...state, orderdetails: action.payload };
    case types.UPDATE_ORDERDETAILS_SUCCESS:
      return { ...state, orderdetails: action.payload };
    case types.GET_ORDERDETAILS_SUCCESS:
      return { ...state, orderdetails: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}