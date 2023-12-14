import ProductItem from "./ProductItem";
import products from "../../constant/products.json";
const ProductList = () => {
  return (
    <div className="my-5 p-2 w-11/12 mx-auto flex items-center flex-wrap">
      <h3 className="w-full text-3xl p-2 my-2 text-orange-600">For You</h3>
      <>
        {products.map((product, id) => {
          if (product.badge === "For You") {
            return <ProductItem product={product} key={id} />;
          }
        })}
      </>

      <h3 className="w-full text-3xl p-2 my-10 text-orange-600">Hot & News</h3>
      <>
        {products.map((product, id) => {
          if (product.badge === "Hot" || product.badge === "New") {
            return <ProductItem product={product} key={id} />;
          }
        })}
      </>
    </div>
  );
};

export default ProductList;
