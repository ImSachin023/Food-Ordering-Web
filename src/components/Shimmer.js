const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-8">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-[280px] rounded-xl overflow-hidden shadow-md bg-white animate-pulse"
          >
            {/* Image */}
            <div className="h-44 bg-gray-300"></div>

            {/* Content */}
            <div className="p-4">
              <div className="h-5 w-3/4 bg-gray-300 rounded mb-3"></div>

              <div className="h-4 w-1/2 bg-gray-300 rounded mb-2"></div>

              <div className="h-4 w-2/3 bg-gray-300 rounded mb-4"></div>

              <div className="flex justify-between">
                <div className="h-4 w-16 bg-gray-300 rounded"></div>

                <div className="h-4 w-16 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
