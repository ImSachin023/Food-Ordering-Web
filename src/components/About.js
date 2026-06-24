import { Component } from "react";
import UserClass from "./UserClass";
import Usercontext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("parent Constructor");
  }

  componentDidMount() {
    // console.log("parent Component did mount");
  }
  render() {
    // console.log("parent render");
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className=" p-3 m-2 text-5xl font-bold underline">About Us</h1>
        <div className="">
          {/* <Usercontext.Consumer>
            {({loggedInUser})=> <h1 className="text-xl font-bold">{loggedInUser}</h1>}
          </Usercontext.Consumer> */}
        </div>

        <UserClass name={"First"} location={"Bokaro"} />
        {/* <UserClass name={"second"} location={"Bokaro"} /> */}
      </div>
    );
  }
}

export default About;

/*
* -parent Constructor
* -parent render
*    Firstchild Constructor
*    Firstchild render
*       secondchild Constructor
*        secondchild render

  reconcilation happen then -> <Dom updated ->single batch
*   Firstchild component did mount
*   secondchild component did mount
* parent component did mount
 */
