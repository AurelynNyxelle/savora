import { FiCheckCircle } from "react-icons/fi";
import { FiMoreVertical } from "react-icons/fi";
import { FiSquare } from "react-icons/fi";
import { FiCheckSquare } from "react-icons/fi";
function GroceryItems ({
    type,
    checked,
    emoji,
    name,
    category,
    quantity,
}) {
    return (
        <div className="flex
        items-center
        justify-between
        bg-whiterounded-2xl
        border
        border-[#E4D9CF]
        px-5
        py-4
        hover:shadow-md
        transition:all-duration-300">
            
            <div className="flex items-center gap-4">
                {type==="todo" ? (
                    checked ? (
                        <FiCheckSquare className="text-[#7B5CFA] text-xl" />
                    ) : (
                    <FiSquare className="text-[#8A8077] text-xl" />
                    )
                    ) : (
                        <FiCheckCircle className="text-green-500 text-xl" />
                )}
                <span className="text-3xl"> {emoji} </span>
                <div>
                    <h3 className="font-source text-lg font-semibold text-[#5B4A3E]">
                        {name}
                    </h3>
                    {type==="todo" && (
                        <span className="inline-block
                        mt-1
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        bg-[#F3ECE6]
                        text-[#8A8077]">
                            {category}
                        </span>
                    )}
                </div>
            </div>
            <div className="flex items-center gap-6">
                <span className="font-semibold text-[#5B4A3E]">
                    {quantity}
                </span>
                {type==="todo" && (
                    <button>
                        <FiMoreVertical className="text-[#D0917F] hover:text-gray-400 transition-colors" />
                    </button>
                )}
            </div>
        </div>
    );
}
export default GroceryItems;