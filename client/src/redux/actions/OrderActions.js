import actionsFunction from "./generated/OrderActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import OrderApi from "../../api/OrderApi";
 
 actionsFunction.loadOrderList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return OrderApi
     .getOrderList()
     .then(list => {
       dispatch(actionsFunction.loadOrderSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
