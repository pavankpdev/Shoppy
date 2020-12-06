// Libraries
import React, { useState } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import classname from "classnames";
import axios from "axios";

// Redux Actions
import { clearCart } from "../../redux/reducer/Cart/Cart.action";
import { placeNewOrder } from "../../redux/reducer/Orders/Orders.action";

const PaymentButton = ({
  price,
  setPaymentSuccess,
  paymentSuccess,
  products,
  setAddressToggle,
  setAddress,
  ...props
}) => {
  // Auth0 hook to redirect for login/ register page
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  const dispatch = useDispatch();

  // Redux state
  const reduxState = useSelector(({ customer }) => ({ customer }));

  const launchRazorPay = () => {
    let options = {
      key: "rzp_test_nPunfSM5NlHI5f",
      amount: price * 100,
      currency: "INR",
      name: "Shoppy",
      description: "Product Purchase",
      image: "https://i.ibb.co/zbpj9k1/Shoppy.png",
      handler: async function (response) {
        dispatch(
          placeNewOrder(reduxState.customer.customerID, products, props.address)
        );
        dispatch(clearCart());
        setAddress("");
        setAddressToggle(false);
        setPaymentSuccess(!paymentSuccess);
        return await axios.get(
          `https://zh0e76b985.execute-api.ap-south-1.amazonaws.com/dev/sendmail?email=${
            user.email
          }&totaItems=${products.length}&totalPrice=${price}&fullname=${
            user.nickname
          }`
        );
      },
      prefill: {
        name: user.fullname,
        email: user.email,
      },

      theme: {
        color: "#e63946",
      },
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
  };

  if (!isAuthenticated) {
    loginWithRedirect();
  }
  return (
    <>
      <Button
        className={classname({ noCursor: props.disabled })}
        color="primary"
        onClick={launchRazorPay}
        disabled={props.disabled}
      >
        <i className="fas fa-lock mr-1" /> Pay securely
      </Button>
    </>
  );
};

export default PaymentButton;
