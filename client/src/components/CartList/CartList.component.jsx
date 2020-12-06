import React from "react";
import { Row, Col, Card } from "reactstrap";

const CartList = ({ cart, minusQuantity, plusQuantity, deleteItem }) => {
  return (
    <>
      <Row>
        <Col>
          <Card className="my-3">
            {cart.map(
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
                    <span className="mx-3 text-primary h3">{quantity}</span>
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
    </>
  );
};

export default CartList;
