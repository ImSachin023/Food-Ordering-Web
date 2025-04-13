import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import Usercontext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(Usercontext);

  const cartItems = useSelector((store) => store.cart.item);
  // console.log(cartItems);

  return (
    <div className="flex justify-between bg-white shadow-lg rounded-2xl p-2 m-1">
      <div className="logo-container">
        <img className="w-30 opacity-80 rounded-full" src={LOGO_URL} alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-5 font-normal text-lg ">
          <li className="px-4 font-medium">
            OnlineStatus:{onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 hover:font-bold ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:font-bold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:font-bold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:font-bold">
            <Link to="/cart">Cart({cartItems.length} ITEM)</Link>
          </li>
          <Link to="/login">
            <button
              className="login"
              onClick={() => {
                btnNameReact === "Login"
                  ? setbtnNameReact("Logout")
                  : setbtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </Link>
          <li className="px-4 hover:font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
