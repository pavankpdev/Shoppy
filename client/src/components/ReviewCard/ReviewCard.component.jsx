// Libraries
import React from "react";
import { Col } from "reactstrap";
// Components
import RatingStars from "../RatingStars/RatingStars.component";

const ReviewCard = ({ user, rating, review }) => {
  return (
    <>
      <div className="mt-4 d-flex justify-content-center ">
        <Col lg="8" className="border-bottom">
          <div className="d-flex justify-content-start align-items-center ">
            <i className="fas fa-user-circle fa-3x" />
            <h3 className="mt-2 ml-2">
              Pavan Kumar
              <span className="h5 font-weight-300">
                ( Reviewed on 2 October 2020 )
              </span>
            </h3>
          </div>
          <RatingStars rating={5} />
          <h4 className="mt-1">
            Good Laptop, seller doesn't care to reply the query, there's no
            orginality anywhere on MSI
          </h4>
          <p>
            This is the best laptop in this range no doubt. But i cannot verify
            if whether it is the verified product or not. There's no information
            regarding this laptop on the MSI official website, it can't be seen
            anywhere except on amazon. I asked a query before purchasing it. But
            the seller didn't even borthered to reply. Though it's a superb
            laptop in this range but I'm still scared if it is an original MSI
            product or not. Since it isn't there on MSI website I'm not able to
            download the latest drivers.
          </p>
        </Col>
      </div>
    </>
  );
};

export default ReviewCard;
