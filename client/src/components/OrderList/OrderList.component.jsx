import React from "react";
import { Col, Card, Table, Button } from "reactstrap";
import classnames from "classnames";
import moment from "moment";
import { Link } from "react-router-dom";

const OrderList = ({ allOrders }) => {
  return (
    <>
      <Col>
        <Card className="my-3">
          <div className="d-flex justify-content-between align-items-baseline  border-bottom border-gray">
            <Table responsive hover>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Order Date</th>
                  <th>quantity</th>
                  <th>total price</th>
                  <th>Shipping Status</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map(
                  ({
                    image1,
                    productName,
                    productDescription,
                    price,
                    shippingDate,
                    shippingStatus,
                    shippingAddress,
                    quantity,
                    productID,
                    shippingId,
                  }) => (
                    <>
                      <tr key={productID}>
                        <td
                          style={{
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            maxWidth: "2px",
                            width: "100%",
                          }}
                        >
                          <h3>{productName}</h3>
                        </td>
                        <td>
                          <span className="h5">
                            {moment(shippingDate).format("MMM DD")}
                          </span>
                        </td>
                        <td>
                          <span className="text-primary h3">{quantity}</span>
                        </td>
                        <td>
                          <h3 className="font-weight-700">
                            ₹ {price * quantity}
                          </h3>
                        </td>
                        <td>
                          <span
                            className={classnames("text-warning", {
                              "text-success": shippingAddress !== "Shipping",
                            })}
                          >
                            {shippingStatus}
                          </span>
                        </td>
                        <td>
                          <Link to={`/track/${shippingId}/`}>
                            <Button outline size="sm">
                              track <i className="fas fa-map-marker-alt ml-1" />
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    </>
                  )
                )}
              </tbody>
            </Table>
          </div>
        </Card>
      </Col>
    </>
  );
};

export default OrderList;
