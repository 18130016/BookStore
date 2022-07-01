import React from "react";
import { RatingStars } from "../RatingStars/RatingStars";

const ProductItem = (props) => {
  return (
    <div className="w-full h-[450px] bg-white mt-10 ml-10 mb-10 hover:cursor-pointer hover:drop-shadow-2xl">
      <div className="h-[65%] w-full">
        <img
        className="w-full h-full object-cover"
          src= {props.image}
          alt=""
        />
      </div>

      <div className="w-[80%] m-auto h-[35%]">
        <h1 className="pt-5 font-semibold text-lg font-serif">{props.title}</h1>
        <h2 className="font-light text-gray-400 pt-2">{props.author}</h2>
        <RatingStars rating={props.rating} />
        <div className="flex flex-row mt-2 w-full relative">
          <span className="font-semibold">{`${props.review} review`}</span>
          <span className="text-2xl text-[red] absolute right-1 bottom-1">{`${props.price}`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
