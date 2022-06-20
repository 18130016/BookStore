import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./CarouselStyles.css";
import "swiper/css";
import { Autoplay } from "swiper";

const listImages = [
  "https://preview.colorlib.com/theme/abcbook/assets/img/hero/h1_hero1.jpg.webp",
  "https://preview.colorlib.com/theme/abcbook/assets/img/hero/h1_hero2.jpg.webp",
  "https://preview.colorlib.com/theme/abcbook/assets/img/hero/h1_hero3.jpg.webp",
];

export default function Carousel() {
  return (
    <div className="w-4/5 m-auto">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {listImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img width={600} src={image} alt="slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
