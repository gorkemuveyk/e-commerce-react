import Slider from "react-slick";
import SliderItem from "./SliderItem";

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-10/12 mx-auto mt-5">
      <Slider {...settings}>
        {/* Custom Slider Item */}
        <SliderItem
          img={"images/apple-watch.png"}
          desc={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis animi nemo omnis illum recusandae optio numquam magni in vel sapiente, voluptates maxime, cupiditate molestiae officia necessitatibus consequatur explicabo aspernatur eaque."
          }
          title={"Apple Watch Series 8"}
        />

        {/* Default Slider Item */}
        <SliderItem />
      </Slider>
    </div>
  );
};

export default Sliders;
