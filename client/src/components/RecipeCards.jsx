function RecipeCard() {
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
           cursor-pointer">
            <div className="h-40 rounded-xl bg-gray-300 mb-4">
                </div>
                <h3 className="font-tai font-semibold text-xl">
                    Brownie
                </h3>
                <p className="text-sm">
                    45 Mins . Dessert
                </p>
        </div>
    );
}
export default RecipeCard;