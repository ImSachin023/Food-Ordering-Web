import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestaurentMenu(resId);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards ||  [];

   const itemRes = 
   resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
     ?.card?.carousel || [];  

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li id={item.card.info.id}>
            {" "}
            {item.card.info.name} -{"Rs."}
            {item.card.info.price / 100 ||
              item.card.info.variantsV2.pricingModels[0].price / 100}
          </li>
        ))}
      </ul>
      <ul>
        {itemRes.map((item) => (
          <li id={item.dish.info.id}>
            {" "}
            {item.dish.info.name} -{"Rs."}
            {item.dish.info.price / 100 ||
              item.card.info.variantsV2.pricingModels[0].price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurentMenu;
