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
 *  TO CUSTOMIZE APIS IN CustomerApiGenerated.js PLEASE EDIT ../CustomerApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class CustomerApiGenerated {

  static contextUrl = properties.endpoint + "/customer";

  // CRUD METHODS

  /**
  * customerService.create
  *   @description CRUD ACTION create
  *   @param customer obj Object to insert
  *
  */
  static createCustomer(customer) {
    return axios.post(CustomerApiGenerated.contextUrl, customer )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * customerService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id customer
  *
  */
  static deleteCustomer(id) {
    return axios.delete(CustomerApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * customerService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id customer
  *   @returns customer
  *
  */
  static getOneCustomer(id) {
    return axios.get(CustomerApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * customerService.list
  *   @description CRUD ACTION list
  *   @returns ARRAY OF customer
  *
  */
  static getCustomerList() {
    return axios.get(CustomerApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * customerService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id customer
  *   @returns customer
  *
  */
  static saveCustomer(customer) {
    return axios.post(CustomerApiGenerated.contextUrl + "/" + customer._id, customer )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default CustomerApiGenerated;
