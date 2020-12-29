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
import ItemsActions from "../redux/actions/ItemsActions";

// END IMPORT ACTIONS

/** APIs

* actionsItems.create
*	@description CRUD ACTION create
*	@param Items obj - Object to insert
*
* actionsItems.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id Items
*	@returns Items
*
* actionsItems.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id Items
*	@returns Items
*

**/

class ItemsEdit extends Component {
  // Init items
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsItems.loadItems(this.props.match.params.id);
    }
    
  }

  // Insert props items in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      items: props.items
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.items._id) {
      this.props.actionsItems.saveItems(this.state.items).then(data => {
        this.props.history.push("/itemses/");
      });
    } else {
      this.props.actionsItems.createItems(this.state.items).then(data => {
        this.props.history.push("/itemses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Items Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="ItemCode"
            label="ItemCode"
            value={this.state.items.ItemCode || ""}
            onChange={Utils.handleChange.bind(this, "items")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.items.ItemCode && this.state.items.ItemCode === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="ItemDescription"
            label="ItemDescription"
            value={this.state.items.ItemDescription || ""}
            onChange={Utils.handleChange.bind(this, "items")}
            margin="normal"
            fullWidth
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/itemses/">Back to list</Link>

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
    actionsItems: bindActionCreators(ItemsActions, dispatch),
  };
};

// Validate types
ItemsEdit.propTypes = { 
  actionsItems: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    items: state.ItemsEditReducer.items
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsEdit);
