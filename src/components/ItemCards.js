import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const Itemcards = ({ items }) => {

  const dispatch = useDispatch()
  const handleAddItems = () => {
    dispatch(addItems("pizza"))
  };

  return (
    <div className="">
      {items.map((item) => (
        <div
          className="m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div className="py-2 flex flex-col">
              <span className="font-bold text-lg py-1">
                {item.card.info.name}
              </span>
              <span className="font-bold text-sm py-1">
                ₹{item.card.info.price / 100}
              </span>
              <span>
                ❇️{item.card.info.ratings.aggregatedRating.rating} (
                {item.card.info.ratings.aggregatedRating.ratingCount})
              </span>
            </div>
            <p className="text-md font-serif py-4">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-4 relative">
            <div className="absolute bottom-0.5">
              <button
                className="px-10 py-2 bg-white  shadow-lg mx-10 text-green-600 font-bold rounded-lg "
                onClick={handleAddItems}
              >
                ADD
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt=""
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Itemcards;
