import actionsFunction from "./generated/CustomerActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import customerApi from "../../api/customerApi";
 
 actionsFunction.loadcustomerList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return customerApi
     .getcustomerList()
     .then(list => {
       dispatch(actionsFunction.loadcustomerSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
