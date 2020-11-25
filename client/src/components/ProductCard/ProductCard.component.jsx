// Libraries
import React from "react";
import { Card, CardImg, CardBody, Col } from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";

// Components
import RatingStar from "../RatingStars/RatingStars.component";

const ProductCard = ({ rating, img, name, price, category, Product_ID }) => {
  return (
    <>
      <Col className="my-3" sm="6" lg="3">
        <Card className="shadow">
          <Link to={`/products/${category}/${Product_ID}`}>
            <CardImg
              top
              src={img}
              alt="Card image cap"
              style={{ height: "30vh", padding: "1rem" }}
            />
          </Link>
          <CardBody>
            <RatingStar rating={5} />

            <Link to={`/products/cat/product`}>
              <h4 className="mt-1 text-truncate font-weight-400">{name}</h4>
            </Link>
            <h2 className="mt--1 font-weight-900">₹ {price}</h2>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default ProductCard;
