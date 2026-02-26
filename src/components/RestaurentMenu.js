import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";

const RestaurentMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurentMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.itemCards?.card?.info || {};

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-9 text-4xl border-1 p-2">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        //controlled component->it control the restaurentcategory as a child to manage the lifting state up 
       //->lifting state up means that one index closed other is open and vice versa also means that to pass the props to the child
        <RestaurentCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false} // particular for one index to open ->it will open all index
          setShowIndex={() => setShowIndex(index)} // it is for the one index open when next index is clicked the other index is closed
        />
      ))}
    </div>
  );
};
export default RestaurentMenu;
