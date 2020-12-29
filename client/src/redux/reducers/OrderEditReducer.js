// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  order: {}
};

// Reducer
export default function OrderEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_ORDER_SUCCESS:
      return { ...state, order: action.payload };
    case types.UPDATE_ORDER_SUCCESS:
      return { ...state, order: action.payload };
    case types.GET_ORDER_SUCCESS:
      return { ...state, order: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}