import actionsFunction from "./generated/OrderDetailsActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import OrderDetailsApi from "../../api/OrderDetailsApi";
 
 actionsFunction.loadOrderDetailsList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return OrderDetailsApi
     .getOrderDetailsList()
     .then(list => {
       dispatch(actionsFunction.loadOrderDetailsSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
