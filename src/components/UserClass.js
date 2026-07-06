import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name +"child Constructor")

    this.state = {
      userInfo: {
        name: "dummy",
        location: "xyz",
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name +"child component did mount")

    const data = await fetch("https://api.github.com/users/ImSachin023");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    // console.log(json)

    this.timer = setInterval(() => {
      // console.log("hello bro")
    }, 1000);
  }

  componentDidUpdate(prevState) {
    if (this.state.count !== prevState.count) {
    }
    if (this.state.count !== prevState.count) {
    }
    console.log("component did update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log("component did unmount")
  }
  render() {
    // console.log(this.props.name +"child render")
    // const { name, location } = this.props;
    const { count, count2 } = this.state;
    const { name, location, avatar_url, followers, following, html_url } =
      this.state.userInfo;

    return (
      <div className="shadow-2xl p-6 m-6  flex flex-col justify-center items-center">
        {/* <h1>count:{count}</h1>
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
       }}>Count Dencrease</button> */}
        <div className=" flex flex-col justify-center items-center bg-gray-100 p-8">
          <h1 className="text-4xl font-bold mb-2 underline">
            Meet the Developer{" "}
          </h1>

          <p className="text-gray-600 text-center max-w-2xl mb-8">
            Passionate Full Stack Developer dedicated to building fast,
            responsive, and user-friendly web applications with modern
            technologies.
          </p>

          <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center w-full max-w-3xl">
            <img
              className="w-44 h-44 rounded-full border-4 border-orange-500 shadow-lg"
              src={avatar_url}
              alt={name}
            />

            <h2 className="text-3xl font-bold mt-5">{name}</h2>

            <p className="text-gray-500 mb-6">
              Full Stack Developer | MERN Stack
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="bg-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-lg">✉ Email</h3>
                <p className="text-gray-600">sachinabx3@gmail.com</p>
              </div>

              <div className="bg-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-lg">👥 Followers</h3>
                <p className="text-gray-600">{followers}</p>
              </div>

              <div className="bg-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-lg">🤝 Following</h3>
                <p className="text-gray-600">{following}</p>
              </div>

              <div className="bg-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-lg">💻 Tech Stack</h3>
                <p className="text-gray-600">
                  React • Tailwind CSS • Redux • Node.js • Express • MongoDB
                </p>
              </div>
            </div>

            <button onClick={() => window.open(html_url)} className="mt-8 bg-black text-white px-8 py-3 rounded-lg font-bold transition">
              Github Profile
            </button>
          </div>
        </div>

        {/* <h2 className="text-lg">location: {location}</h2> */}
      </div>
    );
  }
}
export default UserClass;
