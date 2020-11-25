// Libraries
import React from "react";
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PaymentButton = ({ price, isAuth }) => {
  // Auth0 hook to redirect for login/ register page
  const { loginWithRedirect, user } = useAuth0();

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
      handler: function (response) {},
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

  if (!isAuth) {
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
