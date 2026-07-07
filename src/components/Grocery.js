import React from "react";

const groceryItems = [
  {
    id: 1,
    name: "Fresh Fruits",
    image:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=500",
  },
  {
    id: 2,
    name: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500",
  },
  {
    id: 3,
    name: "Dairy Products",
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500",
  },
  {
    id: 4,
    name: "Bakery",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500",
  },
  {
    id: 5,
    name: "Beverages",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500",
  },
  {
    id: 6,
    name: "Snacks",
    image:
      "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=500",
  },
];

const Grocery = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-12 m-6">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700 underline">
          Grocery Store
        </h1>
      </div>

      {/* Banner */}
      <div className="bg-green-600 text-white rounded-2xl p-6 flex flex-col md:flex-row justify-center items-center mb-12">
        <div>
          <h2 className="text-5xl font-bold mb-3">
            Coming Soon..........!!!!!
          </h2>
       
        </div>
{/* 
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600"
          alt="Grocery"
          className="w-80 rounded-xl mt-8 md:mt-0"
        /> */}
      </div>

      {/* Categories */}
      <h2 className="text-3xl font-bold mb-6">
        Shop by Category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {groceryItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-70 w-full object-cover"
            />

            <div className="p-3 text-center">
              <h3 className="text-xl font-semibold">{item.name}</h3>

              <button className="mt-4 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grocery;