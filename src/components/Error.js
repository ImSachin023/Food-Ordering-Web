import { useRouteError } from "react-router";
import React from "react";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-lg">
        <h1 className="text-7xl font-extrabold text-red-500 mb-4">OOPS!!</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-3">
          Something Went Wrong 😔
        </h2>
        <p className="text-gray-600 mb-6">
          We couldn't process your request. Please try again later.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Error;
