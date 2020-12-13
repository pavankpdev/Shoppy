// Libraries
import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Card,
  Modal,
  ModalBody,
  Label,
  Button,
  Alert,
  CardBody,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SumBy from "lodash/sumBy";
import classname from "classnames";

// Components
import PaymentButton from "../components/PaymentButton/PaymentButton.component";
import InputField from "../components/InputFields/InputField.component";
import CartList from "../components/CartList/CartList.component";

// Redux Action
import {
  incrementQuantity,
  decrementQuantity,
  deleteProduct,
  clearCart,
} from "../redux/reducer/Cart/Cart.action";

const Cart = (props) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [addressToggle, setAddressToggle] = useState(false);
  const [address, setAddress] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  // Redux state
  const reduxState = useSelector(({ cart }) => ({ cart }));

  const dispatch = useDispatch();

  useEffect(
    () =>
      setTotalPrice(
        SumBy(reduxState.cart.cart, function ({ Product_Price, quantity }) {
          return Product_Price * quantity;
        })
      ),
    [reduxState.cart.cart]
  );

  const plusQuantity = (id) => dispatch(incrementQuantity(id));
  const minusQuantity = (id) => dispatch(decrementQuantity(id));
  const deleteItem = (id) => dispatch(deleteProduct(id));

  return (
    <>
      <Container>
        <Alert color="danger" isOpen={totalPrice > 49999}>
          <span className="font-weight-600 text-center">
            Total order should less than 50,000
          </span>
        </Alert>
        <Modal
          isOpen={paymentSuccess}
          toggle={() => setPaymentSuccess(!paymentSuccess)}
        >
          <ModalBody>
            <div className="d-flex justify-content-center">
              <img
                src="https://assets-ouch.icons8.com/free-download/304/ff381043-e5e3-4b0a-95d3-708000f97eda.png?filename=kingdom-order-completed.png"
                className="img-fluid w-50"
                alt="payment success"
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
        <Modal
          isOpen={addressToggle}
          toggle={() => setAddressToggle(!addressToggle)}
        >
          <ModalBody className="bg-secondary">
            <Card className="bg-secondary p-3">
              <div className="mt-3">
                <Label className="text-default font-weight-600">Address</Label>

                <InputField
                  alt
                  placeHolderValue="Add your address"
                  inputType="textarea"
                  name="address"
                  value={address}
                  onChangeTrigger={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="mb-2 d-flex justify-content-between border-top border-primary">
                <h2 className=" text-primary">Total</h2>
                <h2 className=" text-primary">{totalPrice}</h2>
              </div>

              <Card className="bg-default mb-3">
                <CardBody className="text-white font-weight-500">
                  Please use these below card details for payment
                  <br />
                  Card Number: 4111 1111 1111 1111 <br />
                  Expire: any future expiry date <br />
                  Cvv: any 3 digit number
                </CardBody>
              </Card>

              <PaymentButton
                disabled={!address}
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
                products={reduxState.cart.cart}
                address={address}
                setAddressToggle={setAddressToggle}
                setAddress={setAddress}
              />
            </Card>
          </ModalBody>
        </Modal>
        <div className="mt-3 border-bottom border-primary d-flex justify-content-between">
          <h1 className="text-primary">Your Cart</h1>
          <h1 className="font-weight-700">₹ {totalPrice}</h1>
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
            <CartList
              plusQuantity={plusQuantity}
              minusQuantity={minusQuantity}
              deleteItem={deleteItem}
              {...reduxState.cart}
            />
            <Col>
              <Button
                className={classname("float-right", {
                  noCursor: totalPrice > 49999,
                })}
                color="primary"
                onClick={() => setAddressToggle(!addressToggle)}
                disabled={totalPrice > 49999}
              >
                Proceed
              </Button>
            </Col>
          </>
        )}
      </Container>
    </>
  );
};

export default Cart;
