import { createContext } from "react";

const Usercontext = createContext({
  loggedInUser: "Default User",
});

export default Usercontext;
