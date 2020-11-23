import React from "react";
import {
  Container,
  Row,
  Card,
  CardImg,
  CardFooter,
  CardBody,
  Col,
} from "reactstrap";
import classnames from "classnames";
import ProductPage from "../../Page/Products.page";

const ProductCard = ({ rating, img, name, price }) => {
  return (
    <>
      <Col className="my-3" sm="6" lg="3">
        <Card className="shadow">
          <CardImg
            top
            src={img}
            alt="Card image cap"
            style={{ height: "30vh", padding: "1rem" }}
          />
          <CardBody>
            <span>
              <i
                className={classnames("fas fa-star fa-xs text-primary", {
                  "text-gray": 5 - 1 < 0,
                })}
              />
              <i
                className={classnames("fas fa-star fa-xs text-primary", {
                  "text-gray": 5 - 2 < 0,
                })}
              />
              <i
                className={classnames("fas fa-star fa-xs text-primary", {
                  "text-gray": 5 - 3 < 0,
                })}
              />
              <i
                className={classnames("fas fa-star fa-xs text-primary", {
                  "text-gray": 5 - 4 < 0,
                })}
              />
              <i
                className={classnames("fas fa-star fa-xs text-primary", {
                  "text-gray": 5 - 5 < 0,
                })}
              />
            </span>
            <h4 className="mt-1 text-truncate font-weight-400">
              MSI Optix G27C4 27" Full HD 1920 x 1080 1ms (MPRT) 165 Hz HDMI,
              DisplayPort AMD FreeSync Curved Gaming Monitor
            </h4>
            <h2 className="mt--1 font-weight-900">₹ 23,990</h2>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default ProductCard;
