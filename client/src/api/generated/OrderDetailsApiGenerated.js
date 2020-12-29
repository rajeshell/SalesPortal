/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE APIS IN OrderDetailsApiGenerated.js PLEASE EDIT ../OrderDetailsApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class OrderDetailsApiGenerated {

  static contextUrl = properties.endpoint + "/orderdetails";

  // CRUD METHODS

  /**
  * OrderDetailsService.create
  *   @description CRUD ACTION create
  *   @param OrderDetails obj Object to insert
  *
  */
  static createOrderDetails(orderdetails) {
    return axios.post(OrderDetailsApiGenerated.contextUrl, orderdetails )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * OrderDetailsService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id OrderDetails
  *
  */
  static deleteOrderDetails(id) {
    return axios.delete(OrderDetailsApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * OrderDetailsService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id OrderDetails
  *   @returns OrderDetails
  *
  */
  static getOneOrderDetails(id) {
    return axios.get(OrderDetailsApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * OrderDetailsService.list
  *   @description CRUD ACTION list
  *   @returns ARRAY OF OrderDetails
  *
  */
  static getOrderDetailsList() {
    return axios.get(OrderDetailsApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * OrderDetailsService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id OrderDetails
  *   @returns OrderDetails
  *
  */
  static saveOrderDetails(orderdetails) {
    return axios.post(OrderDetailsApiGenerated.contextUrl + "/" + orderdetails._id, orderdetails )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default OrderDetailsApiGenerated;
