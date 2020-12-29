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
 *  TO CUSTOMIZE FUNCTIONS IN OrderActionsGenerated.js PLEASE EDIT ../OrderActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import OrderApi from "../../../api/OrderApi";

let actionsFunction = {

  //CRUD METHODS

  // Create order
  createOrder: function(order) {
    return function(dispatch) {
      return OrderApi
        .createOrder(order)
        .then(order => {
          dispatch(actionsFunction.createOrderSuccess(order));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createOrderSuccess: function(order) {
    return { type: types.CREATE_ORDER_SUCCESS, payload: order };
  },


  // Delete order
  deleteOrder: function(id) {
    return function(dispatch) {
      return OrderApi
        .deleteOrder(id)
        .then(order => {
          dispatch(actionsFunction.deleteOrderSuccess(order));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteOrderSuccess: function(order) {
    return { type: types.DELETE_ORDER_SUCCESS, payload: order };
  },


  // Get order
  loadOrder: function(id) {
    return function(dispatch) {
      return OrderApi
        .getOneOrder(id)
        .then(order => {
          dispatch(actionsFunction.loadOrderSuccess(order));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadOrderSuccess: function(order) {
    return { type: types.GET_ORDER_SUCCESS, payload: order };
  },

  // Load  list
  loadOrderList: function() {
    return function(dispatch) {
      return OrderApi
        .getOrderList()
        .then(list => {
          dispatch(actionsFunction.loadOrderListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadOrderListSuccess: function(list) {
    return { type: types.LIST_ORDER_SUCCESS, payload: list };
  },

	
  // Save order
  saveOrder: function(order) {
    return function(dispatch) {
      return OrderApi
        .saveOrder(order)
        .then(order => {
          dispatch(actionsFunction.saveOrderSuccess(order));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveOrderSuccess: function(order) {
    return { type: types.UPDATE_ORDER_SUCCESS, payload: order };
  },


};

export default actionsFunction;