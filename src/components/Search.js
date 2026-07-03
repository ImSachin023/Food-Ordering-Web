import { useEffect, useState } from "react";
import { Link } from "react-router";
import RestaurantCard from "./RestaurentCard";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [listofRestaurents, setlistofRestaurent] = useState([]);
  const [filteredRestaurents, setfilteredRestaurent] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setlistofRestaurent(restaurants);
  };

  const handleSearch = (value) => {
    setSearchText(value);

    if (value.trim() === "") {
      setfilteredRestaurent([]);
      return;
    }

    const filtered = listofRestaurents.filter((res) =>
      res.info.name.toLowerCase().includes(value.toLowerCase())
    );

    setfilteredRestaurent(filtered);
  };

  return (
    <div className="min-h-screen px-6 py-8">

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-[500px] h-12 px-5 border border-gray-300 rounded-l-lg outline-none focus:border-orange-500"
        />

        <button className="bg-blue-500 text-white px-6 rounded-r-lg">
          Search
        </button>
      </div>

      {/* Empty Search */}
      {searchText === "" && (
        <div className="text-center text-gray-500 text-lg">
          Search for your favourite restaurant 🍔
        </div>
      )}

      {/* No Restaurant Found */}
      {searchText !== "" && filteredRestaurents.length === 0 && (
        <div className="text-center text-xl font-semibold text-red-500">
          No restaurants found 😔
        </div>
      )}

      {/* Restaurant Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredRestaurents.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurent/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search

// import { useEffect, useState } from "react";
// import { CDN_URL } from "../utils/constants";
// import { Link } from "react-router";
// import RestaurantCard, { withPromotedLabel } from "./RestaurentCard";


// const Search = () => {
//   const [searchText, setSearchText] = useState("");
//   const [listofRestaurents, setlistofRestaurent] = useState([]);
//   const [filteredRestaurents, setfilteredRestaurent] = useState([]);
//   const [bannerImg, setBannerImg] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
//     );
//     const json = await data.json();
//     const cards = json?.data?.cards || [];

//     const bannerCard = cards.find(
//       (card) => card?.card?.card?.imageGridCards?.info?.length > 0,
//     );
//     // console.log(bannerCard);

//     const bannerImages =
//       bannerCard?.card?.card?.imageGridCards?.info?.map((item) => ({
//         key: item.id,
//         imageUrl: item.imageId,
//       })) || [];
//     // console.log(bannerImages);
//     setlistofRestaurent(
//       json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
//         ?.restaurants,
//     );
//     setfilteredRestaurent(
//       json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
//         ?.restaurants,
//     );
//     setBannerImg(bannerImages);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <div className="search m-4 p-4 px-4 w-100% flex items-center justify-center">
//         <input
//           type="text"
//           data-testid="searchInput"
//           className="w-[500px] h-11 px-4 border border-gray-300 rounded-lg shadow-sm focus:border-black"
//           placeholder="Search restaurants..."
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         />

//         <button
//           className="h-11 px-6 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition duration-200 shadow-md"
//           onClick={() => {
//             const filteredRestaurants = listofRestaurents.filter((res) =>
//               res.info.name.toLowerCase().includes(searchText.toLowerCase()),
//             );
//             setfilteredRestaurent(filteredRestaurants);
//           }}
//         >
//           Search
//         </button>
//       </div>
//       {filteredRestaurents.map((restaurent) => (
//          <Link
//             key={restaurent.info.id}
//             to={"/restaurent/" + restaurent.info.id}
//           >
//             <RestaurantCard key={restaurent.info.id} resData={restaurent} />
//             {/* {restaurent.info.availability.opened ? (
//               <RestaurentCardPromoted
//                 key={restaurent.info.id}
//                 resData={restaurent}
//               />
//             ) : (
//             )} */}
//           </Link>
//           ))}
//     </div>
//   );
// };
// export default Search;
