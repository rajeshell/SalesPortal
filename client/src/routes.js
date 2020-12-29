// Dependencies
import React, { Component } from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import { PrivateRoute } from "./security/PrivateRoute";

// Material UI
import Paper from "@material-ui/core/Paper";

/* START MY VIEWS IMPORT */

import ItemsEdit from "./pages/ItemsEdit";
import ItemsList from "./pages/ItemsList";
import OrderDetailsEdit from "./pages/OrderDetailsEdit";
import OrderDetailsList from "./pages/OrderDetailsList";
import OrderEdit from "./pages/OrderEdit";
import OrderList from "./pages/OrderList";
import CustomerEdit from "./pages/CustomerEdit";
import CustomerList from "./pages/CustomerList";

/* END MY VIEWS IMPORT */

// CUSTOM VIEWS
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Fragment>
          <Paper>
            <div className="main-cointainer">
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/users/:id" component={UserEdit} roles={["ADMIN"]}/>
              <PrivateRoute exact path="/users" component={UserList} roles={["ADMIN"]}/>
              
              {/* CUSTOM VIEWS */}

              <PrivateRoute exact path="/home" component={Home} />

              {/* START MY VIEWS */}

              <PrivateRoute exact path="/itemses/:id" component={ ItemsEdit }  />
              <PrivateRoute exact path="/itemses" component={ ItemsList }  />
              <PrivateRoute exact path="/orderdetailses/:id" component={ OrderDetailsEdit }  />
              <PrivateRoute exact path="/orderdetailses" component={ OrderDetailsList }  />
              <PrivateRoute exact path="/orders/:id" component={ OrderEdit }  />
              <PrivateRoute exact path="/orders" component={ OrderList }  />
              <PrivateRoute exact path="/customers/:id" component={ CustomerEdit }  />
              <PrivateRoute exact path="/customers" component={ CustomerList }  />

             {/* END MY VIEWS */}

            </div>
          </Paper>
        </Fragment>
      </Switch>
    );
  }
}

export default Routes;