import { useDispatch, useSelector } from "react-redux";
import Itemcards from "./ItemCards";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);

  const dispatch = useDispatch();
  const HandleClearitem = () => {
    dispatch(clearItems());
  };

  return (
    <div className="m-4 p-4 text-center">
      <h1 className="text-2xl font-bold">CART</h1>
      <div className="w-6/12 m-auto">
        <button
          className="px-10 py-2 bg-white  shadow-lg mx-10 text-green-600 font-bold rounded-lg"
          onClick={HandleClearitem}
        >
          ClearCart
        </button>
        {cartItems.length === 0 && (
          <h1>Cart is empty,Please add some items </h1>
        )}
        <Itemcards items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
