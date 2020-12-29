import OrderDetailsApiGenerated from "./generated/OrderDetailsApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class OrderDetailsApi extends OrderDetailsApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get OrderDetails List
  static getOrderDetailsList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/orderdetailss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default OrderDetailsApi;