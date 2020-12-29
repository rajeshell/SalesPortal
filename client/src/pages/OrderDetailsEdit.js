// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Custom Actions


// START IMPORT ACTIONS
import OrderDetailsActions from "../redux/actions/OrderDetailsActions";

// END IMPORT ACTIONS

/** APIs

* actionsOrderDetails.create
*	@description CRUD ACTION create
*	@param OrderDetails obj - Object to insert
*
* actionsOrderDetails.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id OrderDetails
*	@returns OrderDetails
*
* actionsOrderDetails.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id OrderDetails
*	@returns OrderDetails
*

**/

class OrderDetailsEdit extends Component {
  // Init orderdetails
  constructor(props) {
    super(props);
    this.state = {
      orderdetails: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsOrderDetails.loadOrderDetails(this.props.match.params.id);
    }
    
  }

  // Insert props orderdetails in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      orderdetails: props.orderdetails
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.orderdetails._id) {
      this.props.actionsOrderDetails.saveOrderDetails(this.state.orderdetails).then(data => {
        this.props.history.push("/orderdetailses/");
      });
    } else {
      this.props.actionsOrderDetails.createOrderDetails(this.state.orderdetails).then(data => {
        this.props.history.push("/orderdetailses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>OrderDetails Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Amount"
            label="Amount"
            value={this.state.orderdetails.Amount || ""}
            onChange={Utils.handleChange.bind(this, "orderdetails")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Item"
            label="Item"
            value={this.state.orderdetails.Item || ""}
            onChange={Utils.handleChange.bind(this, "orderdetails")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Lineno"
            label="Lineno"
            value={this.state.orderdetails.Lineno || ""}
            onChange={Utils.handleChange.bind(this, "orderdetails")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.orderdetails.Lineno && this.state.orderdetails.Lineno === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="OrderNo"
            label="OrderNo"
            value={this.state.orderdetails.OrderNo || ""}
            onChange={Utils.handleChange.bind(this, "orderdetails")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.orderdetails.OrderNo && this.state.orderdetails.OrderNo === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Price"
            label="Price"
            value={this.state.orderdetails.Price || ""}
            onChange={Utils.handleChange.bind(this, "orderdetails")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Quantity"
            label="Quantity"
            value={this.state.orderdetails.Quantity || ""}
            onChange={Utils.handleChange.bind(this, "orderdetails")}
            margin="normal"
            fullWidth
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/orderdetailses/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsOrderDetails: bindActionCreators(OrderDetailsActions, dispatch),
  };
};

// Validate types
OrderDetailsEdit.propTypes = { 
  actionsOrderDetails: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    orderdetails: state.OrderDetailsEditReducer.orderdetails
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetailsEdit);
