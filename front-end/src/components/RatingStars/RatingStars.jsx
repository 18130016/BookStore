import React from "react";
import StarRatings from "react-star-ratings";

export const RatingStars = (props) => {
  return (
    <div className="mt-[5px] w-[200px]">
      <StarRatings
        name="size-small"
        starRatedColor="#faaf00"
        starSpacing="1px"
        starDimension="17px"
        rating={props.rating}
      ></StarRatings>
    </div>
  );
};
