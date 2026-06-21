// import { useEffect, useState } from "react";
// import { MENU_API } from "../utils/constants";

// const useRestaurentMenu = (resId) => {
//   const [resInfo, setresInfo] = useState(null);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     try {
//       const data = await fetch(MENU_API + resId);
//       console.log(data);
//       const text = await data.text();
//     console.log("Raw response:", text);

//     if (!text) {
//       console.log("Empty response body");
//       return;
//     }

//     const json = JSON.parse(text);
//       // const json = await data.json();
//       setresInfo(json?.data);
//     } catch (error) {
//       console.log("Error fetching menu:", error);
//     }
//   };
//   return resInfo;
// };
// export default useRestaurentMenu;

import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import mockMenu from "../utils/Mockmenu.json";

const useRestaurentMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const text = await data.text();

      if (!text) {
        console.log("Using mock data");
        setresInfo(mockMenu?.data);
        return;
      }

      const json = JSON.parse(text);
      setresInfo(json?.data);

    } catch (error) {
      console.log("API failed, using mock data");
      setresInfo(mockMenu?.data);
    }
  };

  return resInfo;
};

export default useRestaurentMenu;