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
 *  TO CUSTOMIZE APIS IN ItemsApiGenerated.js PLEASE EDIT ../ItemsApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class ItemsApiGenerated {

  static contextUrl = properties.endpoint + "/items";

  // CRUD METHODS

  /**
  * ItemsService.create
  *   @description CRUD ACTION create
  *   @param Items obj Object to insert
  *
  */
  static createItems(items) {
    return axios.post(ItemsApiGenerated.contextUrl, items )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ItemsService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id Items
  *
  */
  static deleteItems(id) {
    return axios.delete(ItemsApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ItemsService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id Items
  *   @returns Items
  *
  */
  static getOneItems(id) {
    return axios.get(ItemsApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ItemsService.list
  *   @description CRUD ACTION list
  *   @returns ARRAY OF Items
  *
  */
  static getItemsList() {
    return axios.get(ItemsApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ItemsService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id Items
  *   @returns Items
  *
  */
  static saveItems(items) {
    return axios.post(ItemsApiGenerated.contextUrl + "/" + items._id, items )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default ItemsApiGenerated;