import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name +"child Constructor")


    this.state = {
        userInfo:{
            name:"dummy",
            location:"xyz"
        }
    }
  }

  async componentDidMount(){
    // console.log(this.props.name +"child component did mount")

    const data = await fetch("https://api.github.com/users/ImSachin023");
    const json = await data.json();
    this.setState({
        userInfo:json
    })
    // console.log(json)

    this.timer = setInterval(()=>{
      // console.log("hello bro")
    },1000)
  }

  componentDidUpdate(prevState){
    if(this.state.count!== prevState.count){

    }  
    if(this.state.count!== prevState.count){
        
    }  
    console.log("component did update")
  }
   
  componentWillUnmount(){
   clearInterval(this.timer)
    // console.log("component did unmount")
  }
  render() {
    // console.log(this.props.name +"child render")
    // const { name, location } = this.props;
    const {count,count2} = this.state;
    const {name,location,avatar_url} = this.state.userInfo

    return (
      <div className="user-card">
        <h1>count:{count}</h1>
        <h1>count:{count2}</h1>
       <button onClick={()=>{
        this.setState({
            count:this.state.count +1,
            count2:this.state.count2 +1,

        })
       }}>Count Increase</button>
        <button onClick={()=>{
        this.setState({
            count:this.state.count -1,
            count2:this.state.count2-1,
        })
       }}>Count Dencrease</button>
       <img src={avatar_url} alt="" />
        <h1>name:{name}</h1>
        <h2>location:{location}</h2>
      </div>
    );
  }
}
export default UserClass;
