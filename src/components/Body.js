import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { CDN_URL } from "../utils/constants";

const Body = () => {
  const [listofRestaurents, setlistofRestaurent] = useState([]);
  const [filteredRestaurents, setfilteredRestaurent] = useState([]);
  const [bannerImg, setBannerImg] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const RestaurentCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    const cards = json?.data?.cards || [];

    const bannerCard = cards.find(
      (card) => card?.card?.card?.imageGridCards?.info?.length > 0,
    );
    // console.log(bannerCard);

    const bannerImages =
      bannerCard?.card?.card?.imageGridCards?.info?.map((item) => ({
        key: item.id,
        imageUrl: item.imageId,
      })) || [];
    // console.log(bannerImages);
    setlistofRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setfilteredRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setBannerImg(bannerImages);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>You're Offline!!! Please Check your Internet Connection</h1>;

  // const { loggedInUser, setuserName } = useContext(Usercontext);
  //conditional rendering
  return !listofRestaurents?.length ? (
    <Shimmer />
  ) : (
    <div className="w-100% h-100% ">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-between">
          <div className="search m-4 p-4 px-4 w-100% flex items-center justify-center">
            <input
              type="text"
              data-testid="searchInput"
              className="border border-solid-black rounded-sm w-200 h-10"
              placeholder="  Search Restaurent"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="bg-blue-500 rounded-md w-25 h-10 text-white"
              onClick={() => {
                const filteredRestaurents = listofRestaurents.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()),
                );
                setfilteredRestaurent(filteredRestaurents);
              }}
            >
              Search
            </button>
          </div>
          <div className="mx-10">
            <button
              className="px-4 py-2 bg-red-700 rounded-sm cursor-pointer text-white end-3"
              onClick={() => {
                const filteredList = listofRestaurents.filter(
                  (res) => res.info.avgRating > 4,
                );
                setlistofRestaurent(filteredList);
              }}
            >
              Top Rated Restaurent
            </button>
          </div>
        </div>
        {/* <div className="m-4 p-4 flex items-center">
          <label>Username:</label>
         <input className="px-2 border-black border"
         value={loggedInUser}
         onChange={(e)=>setuserName(e.target.value)} />
        </div> */}
      </div>
      <div className="my-6 h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
      <div className="flex flex-col">
        <h1 className="ml-10 font-bold text-2xl py-2">What NEW</h1>
        <div className="flex flex-row gap-6 px-4 overflow-x-auto scroll-smooth py-3">
          {bannerImg.map((banner) => (
            <img
              key={banner.key}
              className="py-2 min-w-[250px] h-63 bg-white rounded-3xl object-cover shadow-lg flex-shrink-1"
              src={CDN_URL + banner.imageUrl}
              alt=""
            />
          ))}
          <div className=""></div>
        </div>
      </div>
      <div className="my-6 h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
      <h1 className=" font-bold text-3xl text-center underline mb-6">
        Restaurent Cards
      </h1>
      <div className="w-100% h-50% px-20 flex flex-wrap">
        {filteredRestaurents.map((restaurent) => (
          <Link
            key={restaurent.info.id}
            to={"/restaurent/" + restaurent.info.id}
          >
            <RestaurantCard key={restaurent.info.id} resData={restaurent} />
            {/* {restaurent.info.availability.opened ? (
              <RestaurentCardPromoted
                key={restaurent.info.id}
                resData={restaurent}
              />
            ) : (
            )} */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
