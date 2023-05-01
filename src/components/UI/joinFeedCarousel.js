import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function JoinFeedCarousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-left"></i>
      </div>
    );
  }

  function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-right"></i>
      </div>
    );
  }

  return (
    <Slider {...settings}>
      <div>
        <img src="http://placekitten.com/g/400/200" alt="Kitten 1" />
      </div>
      <div>
        <img src="http://placekitten.com/g/400/200" alt="Kitten 2" />
      </div>
      <div>
        <img src="http://placekitten.com/g/400/200" alt="Kitten 3" />
      </div>
      <div>
        <img src="http://placekitten.com/g/400/200" alt="Kitten 4" />
      </div>
      <div>
        <img src="http://placekitten.com/g/400/200" alt="Kitten 5" />
      </div>
    </Slider>
  );
}

export default JoinFeedCarousel;
