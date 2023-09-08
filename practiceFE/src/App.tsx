import Box from "./Box"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {


  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1
  // };

   const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "linear"
  };

  return (
    <div className=" bg-orange-600 overflow-hidden">
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

export default App