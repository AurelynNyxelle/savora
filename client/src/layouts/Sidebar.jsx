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
        <div className="w-64 min-h-screen border-r p-6">
            <h1 className="text-3xl font-bold mb-8">
                Savora
            </h1>
            <ul className="space-y-4">
                <li className="flex items-center gap-3">
                <FiHome className="text-lg" /> Home </li>
                <li className="flex items-center gap-3">
                <FiBook className="text-lg" /> All Recipes</li>
                 <li className="flex items-center gap-3">
                <MdRestaurant className="text-lg" /> AI Chef </li>
                 <li className="flex items-center gap-3">
                <FiGrid className="text-lg" /> Categories </li>
                 <li className="flex items-center gap-3">
                <FiHeart className="text-lg" /> Favorites </li>
                 <li className="flex items-center gap-3">
                <FiBarChart2 className="text-lg" /> My Stats </li>
                 <li className="flex items-center gap-3">
                <FiShoppingCart className="text-lg" /> Grocery List </li>
                 <li className="flex items-center gap-3">
                <FiUser className="text-lg" /> Profile </li>
                 <li className="flex items-center gap-3">
                <FiLogOut className="text-lg" /> LogOut </li>
            </ul>
        </div>
    );
}
export default Sidebar;