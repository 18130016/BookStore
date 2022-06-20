import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import ProductItem from "../ProductItem/ProductItem";

const products = [
    {
      id: 1,
      image:
        "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/xbest_selling1.jpg.pagespeed.ic.KEGsXcfbW8.webp",
      title: "The Art of War",
      author: "J.R Rain",
      rating: "2",
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

export default function CarouselListProducts(props) {
  return (
    <div className="w-[80%] m-auto">
      <Swiper
        slidesPerView={5}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="ml-[-3px]">
            <ProductItem
              image={product.image}
              title={product.title}
              author={product.author}
              rating={props.rating}
              review={product.review}
              price={product.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
