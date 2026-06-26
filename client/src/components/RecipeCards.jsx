function RecipeCard ({
    title = "Brownie",
    time = "45 Mins",
    category = "Dessert",
}) {
    return(
        <div className="
           w-full
           p-4
           rounded-2xl
           bg-[#E8DED4]
           border
           border-[#8A8077]
           hover:shadow-xl
           hover:-translate-y-1
           transition-all
           duration-300
           overflow-hidden
           cursor-pointer">
            <div className="h-44 rounded-xl bg-gray-300 mb-4">
                </div>
                <h3 className="font-tai font-semibold text-xl">
                   {title}
                </h3>
                <p className="text-sm">
                    {time} • {category}
                </p>
        </div>
    );
}
export default RecipeCard;