import actionsFunction from "./generated/ItemsActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import ItemsApi from "../../api/ItemsApi";
 
 actionsFunction.loadItemsList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return ItemsApi
     .getItemsList()
     .then(list => {
       dispatch(actionsFunction.loadItemsSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
