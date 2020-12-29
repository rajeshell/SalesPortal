// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import OrderDetailsActions from "../redux/actions/OrderDetailsActions";

// END IMPORT ACTIONS

/** APIs

* actionsOrderDetails.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id OrderDetails
*
* actionsOrderDetails.list
*	@description CRUD ACTION list
*	@returns ARRAY OF OrderDetails
*

**/


class OrderDetailsList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsOrderDetails.loadOrderDetailsList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsOrderDetails.deleteOrderDetails(this.state.idDelete).then(data => {
      this.props.actionsOrderDetails.loadOrderDetailsList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "Amount",
        type: "decimal",
        label: "Amount"
      }, 
      {
        id: "Item",
        type: "string",
        label: "Item"
      }, 
      {
        id: "Lineno",
        type: "number",
        label: "Lineno"
      }, 
      {
        id: "OrderNo",
        type: "string",
        label: "OrderNo"
      }, 
      {
        id: "Price",
        type: "decimal",
        label: "Price"
      }, 
      {
        id: "Quantity",
        type: "decimal",
        label: "Quantity"
      },
    ];
    const link = "/orderdetailses/";

    return (
      <div>
        <h1>OrderDetails List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Item</TableCell>
              <TableCell align="right">Lineno</TableCell>
              <TableCell align="right">OrderNo</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/orderdetailses/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.Amount }</TableCell>
                <TableCell align="right">{ row.Item }</TableCell>
                <TableCell align="right">{ row.Lineno }</TableCell>
                <TableCell align="right">{ row.OrderNo }</TableCell>
                <TableCell align="right">{ row.Price }</TableCell>
                <TableCell align="right">{ row.Quantity }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/orderdetailses/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
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
OrderDetailsList.propTypes = { 
  actionsOrderDetails: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.OrderDetailsListReducer.listOrderDetails
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetailsList);
