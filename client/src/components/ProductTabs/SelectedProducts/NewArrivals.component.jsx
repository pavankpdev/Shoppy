import React from "react";
import { Card, CardBody, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import classnames from "classnames";

const NewArrivals = (props) => {
  return (
    <>
      <div className="pr-2 pr-md-3">
        <Link to="/">
          <Card className="shadow  mt-4 mt-md-0 ">
            <CardImg
              top
              className="img-fluid px-auto mx-auto"
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
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
              <h4>
                Dell Vostro 3401 14inch FHD AG 2 Side Narrow Border Display
                Laptop
              </h4>
              <h1 className="font-weight-700 text-primary">₹ 5000</h1>
            </CardBody>
          </Card>
        </Link>
      </div>
    </>
  );
};

export default NewArrivals;
