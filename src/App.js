import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import Usercontext from "./utils/UserContext";
import Login from "./components/Login";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
// import Grocery from "./components/Grocery";

const Applayout = () => {
const [userName,setuserName] = useState()

useEffect(()=>{
  const data = {
    name:"Sachin Kumar"
  };
  setuserName(data.name)
},[])

  return (
    <Provider store={appStore}>
    <Usercontext.Provider value={{loggedInUser : userName,setuserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </Usercontext.Provider>
    </Provider>
  );
};

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
      },
      {
        path: "/restaurent/:resId",
        element: <RestaurentMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
