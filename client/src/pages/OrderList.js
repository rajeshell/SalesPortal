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
import OrderActions from "../redux/actions/OrderActions";

// END IMPORT ACTIONS

/** APIs

* actionsOrder.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id Order
*
* actionsOrder.list
*	@description CRUD ACTION list
*	@returns ARRAY OF Order
*

**/


class OrderList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsOrder.loadOrderList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsOrder.deleteOrder(this.state.idDelete).then(data => {
      this.props.actionsOrder.loadOrderList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "Amount",
        type: "string",
        label: "Amount"
      }, 
      {
        id: "Currency",
        type: "string",
        label: "Currency"
      }, 
      {
        id: "Customer",
        type: "string",
        label: "Customer"
      }, 
      {
        id: "OrderDate",
        type: "date",
        label: "OrderDate"
      }, 
      {
        id: "OrderNo",
        type: "string",
        label: "OrderNo"
      },
    ];
    const link = "/orders/";

    return (
      <div>
        <h1>Order List</h1>

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
              <TableCell align="right">Currency</TableCell>
              <TableCell align="right">Customer</TableCell>
              <TableCell align="right">OrderDate</TableCell>
              <TableCell align="right">OrderNo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/orders/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.Amount }</TableCell>
                <TableCell align="right">{ row.Currency }</TableCell>
                <TableCell align="right">{ row.Customer }</TableCell>
                <TableCell align="right">{ row.OrderDate }</TableCell>
                <TableCell align="right">{ row.OrderNo }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/orders/new">
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
    actionsOrder: bindActionCreators(OrderActions, dispatch),
  };
};

// Validate types
OrderList.propTypes = { 
  actionsOrder: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.OrderListReducer.listOrder
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderList);
