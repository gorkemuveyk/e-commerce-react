import PropType from "prop-types";
import { BsBasket3Fill } from "react-icons/bs";

const ProductItem = ({ product }) => {
  return (
    <div
      className="sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 2xl:w-1/5 p-2 w-full relative cursor-pointer flex flex-col "
      title={product.description}
    >
      <img
        src={`images/${product.image}`}
        className="sm:h-[300px] sm:w-[300px] sm:mx-auto lg:h-[350px] w-[200px] h-[200px] mx-auto"
      />
      <div className="info">
        <span className="absolute top-1 right-1 bg-red-500 p-1 rounded-md text-white">
          {product.badge}
        </span>
        <h3 className="text-xl">{product.name}</h3>
        <p className="truncate border-b border-orange-500 py-1">
          {product.description}
        </p>
        <div className="flex justify-around mt-2">
          <span className="bg-orange-600 p-1 rounded-md text-white">
            {product.price} TL
          </span>
          <span className=" p-1 rounded-md text-green-500">
            <BsBasket3Fill size={24} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

ProductItem.defaultProps = {
  product: [
    {
      name: "not found",
      description: "not-found",
      badge: "not-found",
      price: "not-found",
    },
  ],
};

ProductItem.propTypes = {
  product: PropType.any,
};
