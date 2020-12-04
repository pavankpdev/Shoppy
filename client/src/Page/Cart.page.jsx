// Libraries
import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, ModalBody } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SumBy from "lodash/sumBy";

// Components
import PaymentButton from "../components/PaymentButton/PaymentButton.component";

// Redux Action
import {
  incrementQuantity,
  decrementQuantity,
  deleteProduct,
  clearCart,
} from "../redux/reducer/Cart/Cart.action";

const Cart = (props) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Redux state
  const reduxState = useSelector(({ cart }) => ({ cart }));

  const dispatch = useDispatch();

  const plusQuantity = (id) => dispatch(incrementQuantity(id));
  const minusQuantity = (id) => dispatch(decrementQuantity(id));
  const deleteItem = (id) => dispatch(deleteProduct(id));

  console.log(props);
  return (
    <>
      <Container>
        <Modal
          isOpen={paymentSuccess}
          toggle={() => setPaymentSuccess(!paymentSuccess)}
        >
          <ModalBody>
            <div className="d-flex justify-content-center">
              <img
                src="https://assets-ouch.icons8.com/free-download/304/ff381043-e5e3-4b0a-95d3-708000f97eda.png?filename=kingdom-order-completed.png"
                className="img-fluid w-50"
                alt="payment success image"
              />
            </div>
            <h2 className="mt-3 display-3 text-default text-center">
              Your Order has been placed{" "}
              <Link to="/" className="h4 text-primary font-weight-700">
                <i className="fas fa-arrpw-left" /> Explore more products
              </Link>
            </h2>
          </ModalBody>
        </Modal>
        <div className="mt-3 border-bottom border-primary d-flex justify-content-between">
          <h1 className="text-primary">Your Cart</h1>
          <h1 className="font-weight-700">
            ₹{" "}
            {SumBy(
              reduxState.cart.cart,
              function ({ Product_Price, quantity }) {
                return Product_Price * quantity;
              }
            )}
          </h1>
        </div>
        {reduxState.cart.cart.length === 0 ? (
          <>
            <div className="d-flex justify-content-center">
              <img
                src="https://assets-ouch.icons8.com/free-download/178/0d17b1e0-b37f-4500-ae7b-177e9c86d6ec.png?filename=cherry-list-is-empty-1.png"
                alt="empty cart"
                className="mt-3 w-25 img-fluid"
              />
            </div>
            <h1 className="mt-3 display-3 text-primary text-center">
              Your cart is empty.
            </h1>
          </>
        ) : (
          <>
            <Row>
              <Col>
                <Card className="my-3">
                  {reduxState.cart.cart.map(
                    ({ Product_name, quantity, Product_Price, Product_ID }) => (
                      <div className="d-flex justify-content-between align-items-baseline px-3 py-2 border-bottom border-gray">
                        <h3 className="w-50 col-sm-8 text-truncate">
                          {Product_name}
                        </h3>
                        <div>
                          <i
                            className="far fa-minus-square fa-lg pointer"
                            onClick={() => minusQuantity(Product_ID)}
                          />
                          <span className="mx-3 text-primary h3">
                            {quantity}
                          </span>
                          <i
                            className="far fa-plus-square fa-lg pointer"
                            onClick={() => plusQuantity(Product_ID)}
                          />
                        </div>
                        <h3 className="font-weight-700">
                          ₹ {Product_Price * quantity}
                        </h3>
                        <i
                          className="far fa-trash-alt text-danger pointer"
                          onClick={() => deleteItem(Product_ID)}
                        />
                      </div>
                    )
                  )}
                </Card>
              </Col>
            </Row>
            <Col>
              <PaymentButton
                price={SumBy(
                  reduxState.cart.cart,
                  function ({ Product_Price, quantity }) {
                    return Product_Price * quantity;
                  }
                )}
                isAuth={props.isAuth}
                user={props.user}
                paymentSuccess={paymentSuccess}
                setPaymentSuccess={setPaymentSuccess}
                clearCart={clearCart}
              />
            </Col>
          </>
        )}
      </Container>
    </>
  );
};

export default Cart;
