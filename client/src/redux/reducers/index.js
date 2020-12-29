import { combineReducers } from "redux";

// START IMPORT REDUCERS
import HomeReducer from "./HomeReducer";
import ItemsEditReducer from "./ItemsEditReducer";
import ItemsListReducer from "./ItemsListReducer";
import OrderDetailsEditReducer from "./OrderDetailsEditReducer";
import OrderDetailsListReducer from "./OrderDetailsListReducer";
import OrderEditReducer from "./OrderEditReducer";
import OrderListReducer from "./OrderListReducer";
import CustomerEditReducer from "./CustomerEditReducer";
import CustomerListReducer from "./CustomerListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	HomeReducer,
	ItemsEditReducer,
	ItemsListReducer,
	OrderDetailsEditReducer,
	OrderDetailsListReducer,
	OrderEditReducer,
	OrderListReducer,
	CustomerEditReducer,
	CustomerListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
