import OrderApiGenerated from "./generated/OrderApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class OrderApi extends OrderApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Order List
  static getOrderList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/orders")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default OrderApi;