import PropType from "prop-types";

const SliderItem = ({ img, title, desc }) => {
  return (
    <div className=" !flex justify-center items-center gap-2 p-8 w-full">
      <img src={img} className="w-1/2" alt="" />
      <div className="ml-5  select-text">
        <h3 className="text-6xl text-orange-500 my-2 ">{title}</h3>
        <p className="text-lg ">{desc}</p>
      </div>
    </div>
  );
};

export default SliderItem;

SliderItem.defaultProps = {
  img: "images/iphone.png",
  title: "iPhone 15 Pro Max",
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis animi nemo omnis illum recusandae optio numquam magni in vel sapiente, voluptates maxime, cupiditate molestiae officia necessitatibus consequatur explicabo aspernatur eaque.",
};

SliderItem.propTypes = {
  img: PropType.string.isRequired,
  title: PropType.string.isRequired,
  desc: PropType.string.isRequired,
};
