import { FiStar } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
function FavoriteCard({
  title,
  category,
  time,
  rating,
}) {
  return (
    <div
      className="
      bg-[#E8DED4]
      border
      shadow-sm
      hover:shadow-md
      hover:-translate-y-1
      transition-all
      border-[#8A8077]
      rounded-2xl
      p-5
      "
    >
  <div
    className="
    h-40
    bg-gray-200 
    rounded-xl
    mb-4
    "
  />
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-tai text-xl font-bold">
            {title}
          </h3>

          <p className="text-[#8A8077] mt-1">
            {category}
          </p>
        </div>
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 font-medium text-[#5B4A3E]" >
          <FiStar className="mx-auto text-xl text-[#D0917F]" /> {rating}
        <button className="text-xl hover:scale-110 active:scale-95 transition-all">
            <FiHeart className="mx-auto text-xl text-[#D0917F]" /> 
        </button>
      </div>
      </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
       <div className="flex items-center gap-2 font-medium text-[#5B4A3E]" >
         <FiClock className="mx-auto text-xl text-[#D0917F]" /> {time}
        </div>
        <button
          className="
          px-4
          py-2
          rounded-xl
          bg-[#5B4A3E]
          hover:bg-[#D0917F]
          transition-all
          active:scale-95
          text-white
          "
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}

export default FavoriteCard;