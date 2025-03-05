import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurentMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setresInfo(json.data);
  };

  return resInfo;
};
export default useRestaurentMenu;
