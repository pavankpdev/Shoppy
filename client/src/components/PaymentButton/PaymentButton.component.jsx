// Libraries
import React, { useState } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

// Redux Actions
import { clearCart } from "../../redux/reducer/Cart/Cart.action";

const PaymentButton = ({
  price,
  setPaymentSuccess,
  paymentSuccess,
}) => {
  // Auth0 hook to redirect for login/ register page
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  const dispatch = useDispatch();

  const launchRazorPay = () => {
    let data = {
      email: "",
      price: "",
      quantity: "",
      date: 0,
    };
    let options = {
      key: "rzp_test_nPunfSM5NlHI5f",
      amount: price * 100,
      currency: "INR",
      name: "Shoppy",
      description: "Product Purchase",
      image: "https://i.ibb.co/zbpj9k1/Shoppy.png",
      handler: function (response) {
        dispatch(clearCart());
        return setPaymentSuccess(!paymentSuccess);
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
      <Button color="primary float-right" onClick={launchRazorPay}>
        <i className="fas fa-lock mr-1" /> Pay securely
      </Button>
    </>
  );
};

export default PaymentButton;
