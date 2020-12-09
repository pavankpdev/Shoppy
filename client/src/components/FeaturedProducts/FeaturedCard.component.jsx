import React from "react";
import { Badge } from "reactstrap";
import { Link } from "react-router-dom";

// Components
import RatingStars from "../RatingStars/RatingStars.component";

const FeaturedCard = ({ img, title, price, rating, link }) => {
  return (
    <>
      <div className="featured_product__card__container ">
        <Link to={link}>
          <img
            src={img}
            alt="featured product"
            className="featured_product__card__image"
          />

          <div className="featured_product__card__contents__container">
            <div className="featured_product__card__contents">
              <div className="d-flex justify-content-between">
                <RatingStars rating={rating} />
                <Badge color="primary">
                  <i className="fas fa-fire mr-1" /> In Sale
                </Badge>
              </div>
              <h2 className="featured_product__card__contents__title">
                {title}
              </h2>

              <h2 className="featured_product__card__contents__price text-primary font-weight-400">
                <s>₹ {price}</s>{" "}
                <span className="font-weight-700">₹ {price - 500}</span>
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default FeaturedCard;
