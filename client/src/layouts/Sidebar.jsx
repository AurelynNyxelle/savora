import {
    FiHome,
    FiBook,
    FiGrid,
    FiHeart,
    FiBarChart2,
    FiShoppingCart,
    FiUser,
    FiLogOut,
} from "react-icons/fi";
import {MdRestaurant} from "react-icons/md";
function Sidebar() {
    return (
        <div className="w-64
         min-h-screen 
         bg-[#F6F2EB]
         border-r
         border-[#8A8077]
         p-6
         flex
         flex-col">
            <h1 className="text-4xl 
            font-cinzel
            font-bold
            text-[#5B4A3E]
             mb-10
             text-left">
                Savora
            </h1>
            <ul className="space-y-1">
                <li className="font-source flex items-center gap-3 px-4 py-3 rounded-xl
                 bg-[#F6F2EB] text-[#D0917F] font-semibold hover:bg-[#D0917A] hover:text-white transition-all duration-300 cursor-pointer">
                <FiHome className="text-lg" /> Home </li>
                <li className="font-source flex items-center gap-3 px-4 py-3 rounded-xl 
                text-[#5B4A3E] hover:bg-[#D0917F] hover:text-white cursor-pointer transition-all duration-300">
                <FiBook className="text-lg" /> All Recipes</li>
                 <li className="font-source flex items-center gap-3 px-4 py-3 rounded-xl 
                 text-[#5B4A3E] hover:bg-[#D0917F] hover:text-white cursor-pointer transition-all duration-300">
                <MdRestaurant className="text-lg" /> AI Chef </li>
                 <li className="font-source flex items-center gap-3 px-4 py-3 rounded-xl 
                 text-[#5B4A3E] hover:bg-[#D0917F] hover:text-white cursor-pointer transition-all duration-300">
                <FiGrid className="text-lg" /> Categories </li>
                 <li className="font-source flex items-center gap-3 px-4 py-3 rounded-xl 
                 text-[#5B4A3E] hover:bg-[#D0917F] hover:text-white cursor-pointer transition-all duration-300">
                <FiHeart className="text-lg" /> Favorites </li>
                 <li className="font-source flex items-center gap-3 px-4 py-3 rounded-xl 
                 text-[#5B4A3E] hover:bg-[#D0917F] hover:text-white cursor-pointer transition-all duration-300">
                <FiBarChart2 className="text-lg" /> My Stats </li>
                 <li className="font-source flex items-center gap-3 px-4 py-3 rounded-xl 
                 text-[#5B4A3E] hover:bg-[#D0917F] hover:text-white cursor-pointer transition-all duration-300">
                <FiShoppingCart className="text-lg" /> Grocery List </li>
                 <li className="font-source flex items-center gap-3 px-4 py-3 rounded-xl
                  text-[#5B4A3E] hover:bg-[#D0917F] hover:text-white cursor-pointer transition-all duration-300">
                <FiUser className="text-lg" /> Profile </li>
                 <li className="font-source flex items-center gap-3 px-4 py-3 rounded-xl 
                 text-[#5B4A3E] hover:bg-[#D0917F] hover:text-white cursor-pointer transition-all duration-300">
                <FiLogOut className="text-lg" /> LogOut </li>
            </ul>
            <div className="mt-auto">
                <div className="bg-[#E8DED4] rounded-2xl p-4 border
                border-[#8A8077]">
                    <div className="h-24 bg-gray-200 rounded-xl mb-3"/>
                    <p className="text-sm text-[#5B4A3E]">
                        Today's Special
                    </p>
                    <h3 className="font-tai text-lg font-bold mt-2">
                        Choco Lava Cake
                    </h3>
                    <button className="mt-3 w-full py-2 rounded-xl bg-[#5B4A3E] text-white 
                    hover:bg-[#D0917F] active:scale-95 transition-all duration-300">
                        View Recipe
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;