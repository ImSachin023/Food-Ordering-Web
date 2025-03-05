import { Component } from "react";
import UserClass from "./UserClass";


class About extends Component {

constructor(props){
    super(props)

    console.log("parent Constructor")
}

componentDidMount(){
    console.log( "parent Component did mount")
}
    render(){
        console.log("parent render")
        return(
            <div className="">
            <h1>This is about us page</h1>
            <h2>let's know about the about us page</h2>
      
            <UserClass name={"First"} location={"Bokaro"} />
            {/* <UserClass name={"second"} location={"Bokaro"} /> */}
          </div>
        )
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