import React from "react";
import { Card, CardBody, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import classnames from "classnames";

const NewArrivals = ({ Product_image1, Product_name, Product_Price }) => {
  return (
    <>
      <div className="pr-2 pr-md-3">
        <Link to="/">
          <Card className="shadow  mt-4 mt-md-0 ">
            <CardImg
              top
              className="img-fluid px-auto mx-auto"
              src={Product_image1}
              alt="mobile"
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
              <h4>{Product_name}</h4>
              <h1 className="font-weight-700 text-primary">
                ₹ {Product_Price}
              </h1>
            </CardBody>
          </Card>
        </Link>
      </div>
    </>
  );
};

export default NewArrivals;
