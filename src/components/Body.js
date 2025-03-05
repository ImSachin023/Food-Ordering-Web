import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  const [listofRestaurents, setlistofRestaurent] = useState([]);
  const [filteredRestaurents, setfilteredRestaurent] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.638211600437955&lng=86.16846609860659&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setlistofRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return !listofRestaurents.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurents.map((restaurent) => (
          <Link to={"/restaurent/"+ restaurent.info.id }>
            <RestaurantCard key={restaurent.info.id} resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
