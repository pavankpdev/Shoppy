// Libraries
import React from "react";
import { Container, Row, Col, Card, Button } from "reactstrap";

// Components
import PaymentButton from "../components/PaymentButton/PaymentButton.component";

// Utilities
import { cartData } from "../utils/defaultData.util";

const Cart = () => {
  return (
    <>
      <Container>
        <div className="mt-3 border-bottom border-primary d-flex justify-content-between">
          <h1 className="text-primary">Your Cart</h1>
          <h1 className="font-weight-700">₹ 3800</h1>
        </div>
        <Row>
          <Col>
            <Card className="my-3">
              {cartData.map(({ title, quantity, price }) => (
                <div className="d-flex justify-content-between align-items-baseline px-3 py-2 border-bottom border-gray">
                  <h3 className="w-50 col-sm-8 text-truncate">{title}</h3>
                  <div>
                    <i className="far fa-minus-square fa-lg" />
                    <span className="mx-3 text-primary h3">{quantity}</span>
                    <i className="far fa-plus-square fa-lg" />
                  </div>
                  <h3 className="font-weight-700">₹ {price}</h3>
                  <i className="far fa-trash-alt text-danger" />
                </div>
              ))}
            </Card>
          </Col>
        </Row>
        <Col>
          <PaymentButton />
        </Col>
      </Container>
    </>
  );
};

export default Cart;
