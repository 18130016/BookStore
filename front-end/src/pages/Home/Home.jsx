import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";

const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full">
        <Header />
      </div>

      <div
        style={{ backgroundColor: "rgb(254, 244, 244)" }}
        className="w-full h-full"
      >
          <Menu />
          <Carousel />
        
      </div>
    </div>
  );
};

export default Home;
