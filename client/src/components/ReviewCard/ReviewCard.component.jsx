// Libraries
import React from "react";
import { Col } from "reactstrap";
import moment from "moment";
// Components
import RatingStars from "../RatingStars/RatingStars.component";

const ReviewCard = ({
  fullname,
  rating,
  review,
  subject,
  reviewdate,
  profilepic,
  Audit_status,
}) => {
  return (
    <>
      <div className="mt-4 d-flex justify-content-center ">
        <Col lg="8" className="border-bottom">
          <div className="d-flex justify-content-start align-items-center ">
            {profilepic ? (
              <img
                src={profilepic}
                alt="profilepic"
                className="img-fluid img-thumbnail"
                style={{ borderRadius: "50%", width: "10%" }}
              />
            ) : (
              <i className="fas fa-user-circle fa-3x" />
            )}
            <h3 className="mt-2 ml-2">
              {fullname}
              <span className="h5 font-weight-300 ml-2">
                {Audit_status !== "Pending" ? (
                  <i className="fas fa-check-circle text-primary" data-toggle="tooltip" title="This review was verified and approved."/>
                ) : (
                  <i className="fas fa-clock text-primary" data-toggle="tooltip" title="This review is not approved yet."/>
                )}
              </span>
              <span className="h5 font-weight-300 ml-2">
                ( Reviewed on {moment(reviewdate).format("DD MMM YYYY")} )
              </span>
            </h3>
          </div>
          <RatingStars rating={rating} />
          <h4 className="mt-1">{subject}</h4>
          <p>{review}</p>
        </Col>
      </div>
    </>
  );
};

export default ReviewCard;
