import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
function SearchBar() {
    const navigate = useNavigate();
    return (
   <div className="flex gap-4 mb-6">
  <div className="relative flex-1">
    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

    <input
      type="text"
      placeholder="Search recipes..."
      className=" w-full
                 border
                border-[#BAB077]
                rounded-xl
                py-3
                pl-10
                focus:outline-none
                focus:ring-2
                focus:ring-[#D0917F]"
    />
  </div>

  <button onClick={() => navigate("/add-recipe")}
                   className=" px-6 py-3
                     rounded-xl
                    bg-[#5B4A3E]
                    text-white
                    hover:bg-[#D0917F]
                    transition-all
                    duration-300
                    font-medium">
    + New Recipe
  </button>
</div>
    );
}
export default SearchBar;