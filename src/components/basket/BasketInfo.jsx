import { useDispatch } from "react-redux"
import { destoryBasket } from "../../redux/slices/basketSlice";

const BasketInfo = () => {
    const dispatch = useDispatch();
    const keys = Object.keys(localStorage);
    let totalProduct = 0, cargo = 30, total = 0;

    keys.map((key) => {
        const tempData = JSON.parse(localStorage.getItem(key));
        totalProduct += tempData.price * tempData.quantity
    })
    total = totalProduct - cargo;
    return (
        <div className="flex flex-col p-2 gap-5 rounded">
            <button onClick={() => dispatch(destoryBasket())} className="bg-orange-500 text-white p-2 rounded">Complete Order</button>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-start text-xl my-4 w-full">Order Summary</h1>
                <div className="flex flex-row justify-between p-3 w-full items-center border-b">
                    <p>Total Product</p>
                    <span className="text-orange-400 font-bold text-xl">${totalProduct}</span>
                </div>
                <div className=" border-b flex flex-row justify-between p-3 w-full items-center">
                    <p>Cargo Total</p>
                    <span className="text-orange-400 font-bold text-xl">${cargo}</span>
                </div>
                <div className=" border-b flex flex-row justify-between p-3 w-full items-center">
                    <p>Free cargo on this order</p>
                    <span className="text-orange-400 font-bold text-xl">-${cargo}</span>
                </div>
                <div className=" border-b flex flex-row justify-between p-3 w-full items-center">
                    <p>Total</p>
                    <span className="text-orange-400 font-bold text-xl">${total + cargo}</span>
                </div>
                <div className="flex justify-between w-full  items-center">
                    <input className="w-full p-2 rounded m-2 border border-orange-500 outline-none" type="text" placeholder="Enter e coupon code" />
                    <button className="w-full bg-orange-500 rounded p-2 text-white">Code Apply</button>
                </div>
            </div>
            <button className="bg-orange-500 text-white p-2 rounded" onClick={() => dispatch(destoryBasket())}>Complete Order</button>
        </div>
    )
}

export default BasketInfo