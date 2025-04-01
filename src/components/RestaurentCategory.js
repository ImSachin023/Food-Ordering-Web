import Itemcards from "./ItemCards";

const RestaurentCategory = ({data,showItems,setShowIndex}) => {
const handleClick = ()=>{
  console.log("clicked")
  setShowIndex()
}

  return <div>
    <div className="w-6/12 mx-auto my-4 shadow-lg bg-gray-50  p-4 cursor-pointer">
    <div className="flex justify-between" onClick={handleClick}>
    <span className="font-bold text-xl">{data.title} ({data.itemCards.length})</span>
    <span>👇</span>
    </div>
    {showItems && <Itemcards items = {data.itemCards} />}
    </div>

  </div>;
};

export default RestaurentCategory;
