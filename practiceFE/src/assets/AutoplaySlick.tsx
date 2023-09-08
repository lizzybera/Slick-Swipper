import Box from "../Box"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const AutoplaySlick = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,
    cssEase: "linear"
  };

  return (
    <div className=" bg-orange-600">
    <Slider {...settings}>
    <Box bg="bg-blue-600" text="go"/>
      <Box bg="bg-blue-600" text="go"/>
      <Box bg="bg-blue-600" text="go"/>
      <Box bg="bg-blue-600" text="go"/>
      <Box bg="bg-blue-600" text="go"/>
    </Slider>
    </div>
  )
}

export default AutoplaySlick