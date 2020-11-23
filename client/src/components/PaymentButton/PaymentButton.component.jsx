// Libraries
import React from "react";
import { Button } from "reactstrap";

const PaymentButton = (props) => {
  const launchRazorPay = () => {
    let data = {
      email: "",
      price: "",
      quantity: "",
      date: 0,
    };
    let options = {
      key: "rzp_test_nPunfSM5NlHI5f",
      amount: 1000,
      currency: "INR",
      name: "Shoppy",
      description: "Product Purchase",
      image: "https://i.ibb.co/zbpj9k1/Shoppy.png",
      handler: function (response) {},
      prefill: {
        name: "props.user.fullname",
        email: "props.user.email",
      },

      theme: {
        color: "#e63946",
      },
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
  };
  return (
    <>
      <Button color="primary float-right" onClick={launchRazorPay}>
        <i className="fas fa-lock mr-1" /> Pay securely
      </Button>
    </>
  );
};

export default PaymentButton;
