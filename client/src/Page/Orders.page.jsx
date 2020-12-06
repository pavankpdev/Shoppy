// Libraries
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Table, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

// Redux Actions
import { getAllOrders } from "../redux/reducer/Orders/Orders.action";

// Components
import Spinner from "../components/CustomSpinner/CustomSpinner.component";
import OrderList from "../components/OrderList/OrderList.component";

const Order = () => {
  // Component State
  const [allOrders, setAllOrders] = useState([]);

  // Redux state
  const reduxState = useSelector(({ order, customer }) => ({
    order,
    customer,
  }));

  // Initializing dispatch hook
  const dispatch = useDispatch();

  // Calling redux action to get all orders of the customer
  useEffect(() => {
    const getAllorderAction = async () => {
      const getAllCustomerOrders = await dispatch(
        getAllOrders(reduxState.customer.customerID)
      );
      console.log(getAllCustomerOrders);
      setAllOrders(getAllCustomerOrders.payload);
    };
    getAllorderAction();
  }, []);

  return (
    <>
      <Container>
        <div className="mt-3 border-bottom border-primary d-flex justify-content-between">
          <h1 className="text-primary">Your Orders</h1>
        </div>
        {reduxState.order.loading ? (
          <Spinner text="Fetching your orders..."  />
        ) : (
          <OrderList allOrders={allOrders} />
        )}
      </Container>
    </>
  );
};

export default Order;
