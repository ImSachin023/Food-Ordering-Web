import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import Usercontext from "../utils/UserContext";

const Body = () => {
  const [listofRestaurents, setlistofRestaurent] = useState([]);
  const [filteredRestaurents, setfilteredRestaurent] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurentCardPromoted = withPromotedLabel(RestaurantCard);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    
    const json = await data.json();
    setlistofRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>You're Offline!!! Please Check your Internet Connection</h1>;

  const {loggedInUser,setuserName} = useContext(Usercontext)

  return !listofRestaurents.length ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex">
        <div className="search m-4 p-4 px-4">
          <input
            type="text"
            className="border border-solid-black rounded-sm"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="p-2 m-1  bg-emerald-100 rounded-lg w-15"
            onClick={() => {
              const filteredRestaurents = listofRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurent(filteredRestaurents);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4  flex items-center">
          <button
            className="px-4 py-2 bg-cyan-100  rounded-lg "
            onClick={() => {
              const filteredList = listofRestaurents.filter(
                (res) => res.info.avgRating > 4
              );
              setlistofRestaurent(filteredList);
            }}
          >
            Top Rated Restaurent
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label>Username:</label>
         <input className="px-2 border-black border"
         value={loggedInUser}
         onChange={(e)=>setuserName(e.target.value)} />
        </div>
      </div>
      <div className="w-100% h-50% px-20 flex flex-wrap">
        {filteredRestaurents.map((restaurent) => (
          <Link key={restaurent.info.id}  to={"/restaurent/" + restaurent.info.id}>
            {restaurent.info.availability.opened ? (
              <RestaurentCardPromoted
                key={restaurent.info.id}
                resData={restaurent}
              />
            ) : (
              <RestaurantCard key={restaurent.info.id} resData={restaurent} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
