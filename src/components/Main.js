import React from "react";
import Slider from "react-slick";
import ing from "../components/slide1.jpg";
import ing2 from "../components/slide2.jpg";
import ing3 from "../components/slide3.jpg";
import ing4 from "../components/slide4.jpg";
import ing5 from "../components/slide5.jpg";


const Main = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
  
    <Slider {...settings}>      
      <div>
        <img width="100%" height="650px" src={ing} alt="Image 1" />
      </div>
      <div>
        <img width="100%" height="650px" src={ing3} alt="Image 2" />
      </div>
      <div>
        <img width="100%" height="650px" src={ing2} alt="Image 3" />
      </div>
      <div>
        <img width="100%" height="650px" src={ing4} alt="Image 4" />
      </div>
      <div>
        <img width="100%" height="650px" src={ing5} alt="Image 4" />
      </div>
    </Slider>
    </>
  );
};

export default Main;
