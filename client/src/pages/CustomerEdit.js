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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// Custom Actions


// START IMPORT ACTIONS
import CustomerActions from "../redux/actions/CustomerActions";

// END IMPORT ACTIONS

/** APIs

* actionsCustomer.create
*	@description CRUD ACTION create
*	@param customer obj - Object to insert
*
* actionsCustomer.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id customer
*	@returns customer
*
* actionsCustomer.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id customer
*	@returns customer
*
* actionsUser.list
*	@description CRUD ACTION list
*

**/

class CustomerEdit extends Component {
  // Init customer
  constructor(props) {
    super(props);
    this.state = {
      customer: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsCustomer.loadCustomer(this.props.match.params.id);
    }
    
    this.props.actionsUser.loadUserList();
  }

  // Insert props customer in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      customer: props.customer
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.customer._id) {
      this.props.actionsCustomer.saveCustomer(this.state.customer).then(data => {
        this.props.history.push("/customers/");
      });
    } else {
      this.props.actionsCustomer.createCustomer(this.state.customer).then(data => {
        this.props.history.push("/customers/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Customer Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Address"
            label="Address"
            value={this.state.customer.Address || ""}
            onChange={Utils.handleChange.bind(this, "customer")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="CustomerName"
            label="CustomerName"
            value={this.state.customer.CustomerName || ""}
            onChange={Utils.handleChange.bind(this, "customer")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m _customer with User */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="_customer">
              _customer
            </InputLabel>
            <Select
              value={this.state.customer._customer || ""}
              onChange={Utils.handleChangeSelect.bind(this, "customer")}
              inputProps={{
                id: "_customer",
                name: "_customer"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listUser && this.props.listUser.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/customers/">Back to list</Link>

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
    actionsCustomer: bindActionCreators(CustomerActions, dispatch),
  };
};

// Validate types
CustomerEdit.propTypes = { 
  actionsCustomer: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    customer: state.CustomerEditReducer.customer,
    listUser: state.CustomerEditReducer.listUser
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerEdit);
