import React from "react";
import { Card, CardText, CardImg, CardBody, CardFooter } from "reactstrap";
import { Link } from "react-router-dom";

const TrendingProducts = (props) => {
  return (
    <>
      <Card className="shadow-lg trendingCard mt-3 mt-md-0">
        <CardImg top className="img-fluid " src={props.img} alt="mobile" />
        <CardBody>
          <CardText className="font-weight-700 h2">{props.title}</CardText>
        </CardBody>
        <CardFooter>
          <Link> See all offers</Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default TrendingProducts;
