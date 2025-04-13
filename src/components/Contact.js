const Contact = () => {
  return (
    <div>
    <div className="flex justify-center ">
      <h1 className="font-bold text-3xl m-4 p-4 ">Contact Us</h1>
      </div>
      <form className="flex justify-center">
        <input
          type="text"
          placeholder="name"
          className="border border-black p-2 m-2 rounded-md "
        />
        <input
          type="text"
          placeholder="message"
          className="border border-black p-2 m-2 rounded-md"
        />
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>   
    </div>
  );
};
export default Contact;
