import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import CarouselListProducts from "../../components/Carousel/CarouselListProducts";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import ProductItem from "../../components/ProductItem/ProductItem";

const products = [
  {
    id: 1,
    image:
      "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/xbest_selling1.jpg.pagespeed.ic.KEGsXcfbW8.webp",
    title: "The Art of War",
    author: "J.R Rain",
    rating: 2,
    review: 120,
    price: "$25.00",
  },
  {
    id: 2,
    image:
      "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/xbest_selling2.jpg.pagespeed.ic.KEGsXcfbW8.webp",
    title: "The Art of War",
    author: "J.R Rain",
    rating: 2,
    review: 120,
    price: "$25.00",
  },
  {
    id: 3,
    image:
      "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/xbest_selling3.jpg.pagespeed.ic.KEGsXcfbW8.webp",
    title: "The Art of War",
    author: "J.R Rain",
    rating: 2,
    review: 120,
    price: "$25.00",
  },
  {
    id: 4,
    image:
      "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/xbest_selling4.jpg.pagespeed.ic.KEGsXcfbW8.webp",
    title: "The Art of War",
    author: "J.R Rain",
    rating: 2,
    review: 120,
    price: "$25.00",
  },
  {
    id: 5,
    image:
      "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/xbest_selling5.jpg.pagespeed.ic.KEGsXcfbW8.webp",
    title: "The Art of War",
    author: "J.R Rain",
    rating: 2,
    review: 120,
    price: "$25.00",
  },
  {
    id: 6,
    image:
      "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/xbest_selling6.jpg.pagespeed.ic.KEGsXcfbW8.webp",
    title: "The Art of War",
    author: "J.R Rain",
    rating: 2,
    review: 120,
    price: "$25.00",
  },
];

const Home = () => {
  return (
    <div className="w-full">
      <div className="w-full h-full">
        <Header />
      </div>

      <div
        style={{ backgroundColor: "rgb(254, 244, 244)" }}
        className="w-full h-full"
      >
        <Menu />
        <Carousel />

        <h1 className="font-semibold text-2xl text-center mt-10">
          Best Selling Books Ever
        </h1>

        <div className="w-full">
          <CarouselListProducts />
        </div>

    
        <div className="w-full mt-10">
          <div className="w-4/5 m-auto flex flex-row items-center relative">
            <h1 className="font-semibold text-3xl pl-5">Latest Published items</h1>
            <div className="absolute right-10">
              <button className="rounded-3xl font-serif text-gray-400 border border-gray-400 border-solid px-6 text-lg">All</button>
              <button className="ml-2 rounded-3xl font-serif text-gray-400 border border-gray-400 border-solid px-6 text-lg">Horror</button>
              <button className="ml-2 rounded-3xl font-serif text-gray-400 border border-gray-400 border-solid px-6 text-lg">Thriller</button>
              <button className="ml-2 rounded-3xl font-serif text-gray-400 border border-gray-400 border-solid px-6 text-lg">Science Fiction</button>
              <button className="ml-2 rounded-3xl font-serif text-gray-400 border border-gray-400 border-solid px-6 text-lg">History</button>
            </div>
          </div>
          <CarouselListProducts />
        </div>

      </div>
    </div>
  );
};

export default Home;
