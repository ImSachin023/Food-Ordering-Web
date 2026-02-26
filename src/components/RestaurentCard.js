import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData)

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-100 bg-slate-100 rounded-2xl flex flex-col shadow-lg"
    >
      <img
        className="w-90 h-60 rounded-2xl object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt=""
      />
      <div className="flex flex-col">
        <div className="h-1/2 p-2 text-md font-bold">
        <h3 className="py-2 text-2xl">{name}</h3>
        <div className="flex flex-row items-center">
        <h4 className="mx-1">⭐{avgRating} </h4>
        <h4 className="p-1 mx-1">• {deliveryTime}mins</h4>
        </div>
        <h4 className="p-2 mx-1">{costForTwo}</h4>
          <h4 className="p-2 font-light line-clamp-1 truncate">{cuisines?.join(" ,")}</h4>

      </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = () => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-2 bg-blue-500 text-white text-xs rounded-lg">
          🟢Online
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
