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
import { DateTimePicker } from "material-ui-pickers";

// Custom Actions


// START IMPORT ACTIONS
import OrderActions from "../redux/actions/OrderActions";

// END IMPORT ACTIONS

/** APIs

* actionsOrder.create
*	@description CRUD ACTION create
*	@param Order obj - Object to insert
*
* actionsOrder.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id Order
*	@returns Order
*
* actionsOrder.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id Order
*	@returns Order
*

**/

class OrderEdit extends Component {
  // Init order
  constructor(props) {
    super(props);
    this.state = {
      order: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsOrder.loadOrder(this.props.match.params.id);
    }
    
  }

  // Insert props order in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      order: props.order
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.order._id) {
      this.props.actionsOrder.saveOrder(this.state.order).then(data => {
        this.props.history.push("/orders/");
      });
    } else {
      this.props.actionsOrder.createOrder(this.state.order).then(data => {
        this.props.history.push("/orders/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Order Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Amount"
            label="Amount"
            value={this.state.order.Amount || ""}
            onChange={Utils.handleChange.bind(this, "order")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Currency"
            label="Currency"
            value={this.state.order.Currency || ""}
            onChange={Utils.handleChange.bind(this, "order")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Customer"
            label="Customer"
            value={this.state.order.Customer || ""}
            onChange={Utils.handleChange.bind(this, "order")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.order.Customer && this.state.order.Customer === ""
              ? { error: true }
              : {})}
          />
          
          <DateTimePicker
            id="OrderDate"
            label="OrderDate"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.order.OrderDate
                ? new Date(this.state.order.OrderDate)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "order", "OrderDate")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="OrderNo"
            label="OrderNo"
            value={this.state.order.OrderNo || ""}
            onChange={Utils.handleChange.bind(this, "order")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.order.OrderNo && this.state.order.OrderNo === ""
              ? { error: true }
              : {})}
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/orders/">Back to list</Link>

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
    actionsOrder: bindActionCreators(OrderActions, dispatch),
  };
};

// Validate types
OrderEdit.propTypes = { 
  actionsOrder: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    order: state.OrderEditReducer.order
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderEdit);
