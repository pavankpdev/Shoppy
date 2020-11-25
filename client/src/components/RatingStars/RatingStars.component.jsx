// Libraries
import React from "react";
import classnames from "classnames";

const RatingStars = ({ rating, lg }) => {
  return (
    <>
      <span>
        <i
          className={classnames(
            `fas fa-star fa-${lg ? "lg" : "xs"} text-primary`,
            {
              "text-gray": rating - 1 < 0,
            }
          )}
        />
        <i
          className={classnames(
            `fas fa-star fa-${lg ? "lg" : "xs"} text-primary`,
            {
              "text-gray": rating - 2 < 0,
            }
          )}
        />
        <i
          className={classnames(
            `fas fa-star fa-${lg ? "lg" : "xs"} text-primary`,
            {
              "text-gray": rating - 3 < 0,
            }
          )}
        />
        <i
          className={classnames(
            `fas fa-star fa-${lg ? "lg" : "xs"} text-primary`,
            {
              "text-gray": rating - 4 < 0,
            }
          )}
        />
        <i
          className={classnames(
            `fas fa-star fa-${lg ? "lg" : "xs"} text-primary`,
            {
              "text-gray": rating - 5 < 0,
            }
          )}
        />
      </span>
    </>
  );
};

export default RatingStars;
