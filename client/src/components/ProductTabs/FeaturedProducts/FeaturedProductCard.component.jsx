import React from "react";
import { Card, CardImg } from "reactstrap";

const FeaturedProductCard = ({ img, name, price }) => {
  return (
    <>
      <div className="pl-md-2">
        <Card className="p-2" style={{ width: "15rem" }}>
          <CardImg
            top
            src={img}
            alt="Card image cap"
            style={{ height: "30vh", padding: "1rem" }}
            
          />
          <h3 className="mt--1 text-truncate font-weight-400">{name}</h3>
          <h3 className="mt--1 font-weight-700">₹ {price}</h3>
        </Card>
      </div>
    </>
  );
};

export default FeaturedProductCard;
