import { useParams } from "react-router-dom";
import products from "../../constant/products.json";
import "./ProductDetail.css";
import { BsBasket3Fill } from "react-icons/bs";
import { FaHeart, FaStar } from "react-icons/fa";
import CommentItem from "../comments/CommentItem";
import { GiCargoCrate } from "react-icons/gi";

const ProductDetail = () => {
  const { id: dataID } = useParams();
  const item = products.find((product) => product.id === parseInt(dataID));

  return (
    <>
      <div className="product-detail flex lg:flex-row flex-col justify-center md:items-center md:justify-center gap-5  p-3 ">
        <div className="images flex flex-col justify-center items-center">
          <img src={`/images/${item.image}`} className="w-[350px] " alt="" />
          <div className="sub-images flex justify-center items-center gap-2">
            <img
              src="/images/product-sub-image.png"
              className="rounded-md"
              alt=""
            />
            <img
              src="/images/product-sub-image.png"
              className="rounded-md"
              alt=""
            />
            <img
              src="/images/product-sub-image.png"
              className="rounded-md"
              alt=""
            />
          </div>
        </div>

        <div className="product-info flex flex-col justify-center gap-2 ms-0 md:ms-5 relative">
          <h2 className="title text-5xl">{item.name}</h2>
          <div className="stars my-2 flex">
            <FaStar className="text-orange-500" size={22} />
            <FaStar className="text-orange-500" size={22} />
            <FaStar className="text-orange-500" size={22} />
            <FaStar className="text-orange-500" size={22} />
            <FaStar size={22} />
          </div>
          <p className="description sm:w-[350px] md:w-[500px] w-[300px] my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            dolore inventore neque ad nisi maxime et? Maiores dignissimos ea
            iusto molestiae officia cum voluptatum quod. Fugit, asperiores. Hic,
            soluta neque? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Fuga repudiandae libero unde perferendis eum similique? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ut at quaerat
            voluptatem dignissimos esse magnam ratione earum quo corrupti porro.
          </p>

          <div className="w-full">
            <select name="" className="w-full p-2 rounded-sm border">
              <option value="select">Color Select</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="pink">Pink</option>
            </select>
          </div>

          <div className="p-2 h-22 md:h-14 flex flex-col md:flex-row md:justify-between items-center">
            <div className="buttons flex">
              <button className="hover:bg-orange-500 hover:text-white transition-colors border-orange-500 border p-2 rounded-md text-orange-500 me-5 flex justify-center items-center ">
                <BsBasket3Fill /> Buy Now
              </button>
              <button className="hover:bg-red-500 hover:text-white transition-colors border-red-500 border p-2 rounded-md text-red-500 flex justify-center items-center gap-3">
                <FaHeart />
                Add Favorites
              </button>
            </div>
            <div className="price bg-orange-500 p-2 rounded-md text-white relative md:w-1/5 w-full mt-2 md:mt-0 text-center">
              {item.price} TL
            </div>
          </div>

          <div className="bg-green-100 p-2 rounded-sm text-black flex justify-start items-center gap-2">
            <GiCargoCrate size={24} className="text-green-500" />
            <p>
              <span className="text-green-500">Fast delivery:</span> Cargo
              delivery within 1 business day
            </p>
          </div>
        </div>
      </div>
      <div className="comments">
        <CommentItem />
      </div>
    </>
  );
};

export default ProductDetail;
