import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData)

  const { name, cuisines, avgRating, costFortwo, cloudinaryImageId } =
    resData?.info;
  const {deliveryTime}  =resData?.info?.sla;

  return (
    <div className="h-50% m-4 p-4 w-[300px] bg-slate-100 rounded-lg">
      <img className="w-100% h-90 rounded-sm" src= {CDN_URL + cloudinaryImageId} alt="" />
      <div className="h-1/2 p-2 text-md font-serif font-bold">
      <h3 className="py-2 text-xl">{name}</h3>
      <h4 className="p-2 font-light">{cuisines.join(" ,")}</h4>
      <h4 className="p-2">{avgRating} stars</h4>
      <h4 className="p-2">{costFortwo}</h4>
      <h4 className="">{deliveryTime}minutes</h4>
      </div>
    </div>
  );
};

export const withPromotedLabel = () =>{
  return(props) =>{
    return(
      <div>
        <label className="absolute m-2 p-2 bg-blue-500 text-white text-xs rounded-lg">🟢Online</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
