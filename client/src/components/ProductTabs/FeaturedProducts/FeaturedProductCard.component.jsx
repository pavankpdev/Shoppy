import React from "react";
import { Card, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

const FeaturedProductCard = ({ Product_image1,  Product_name, Product_Price, category, Product_ID }) => {
  return (
    <>
      <div className="pl-md-2">
        <Link to={`/products/${category}/${Product_ID}`}>
          <Card className="p-2" style={{ width: "15rem" }}>
            <CardImg
              top
              src={Product_image1}
              alt="Card image cap"
              style={{ height: "30vh", padding: "1rem" }}
            />
            <h3 className="mt--1 text-truncate font-weight-400">{Product_name}</h3>
            <h3 className="mt--1 font-weight-700">₹ {Product_Price}</h3>
          </Card>
        </Link>
      </div>
    </>
  );
};

export default FeaturedProductCard;
