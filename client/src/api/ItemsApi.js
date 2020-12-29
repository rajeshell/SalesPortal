import ItemsApiGenerated from "./generated/ItemsApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ItemsApi extends ItemsApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Items List
  static getItemsList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/itemss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ItemsApi;