function CategoryPills() {
    const categories = [
        "All",
        "Desserts",
        "Breakfast",
        "Lunch",
        "Dinner",
        "Quick Meals",
        "Snacks",
        "Healthy",
    ];
    return (
        <div className="flex flex-wrap gap-4">
            {categories.map((category) =>  (
                <button 
                key={category}
                className={ category === "All"
            ? "px-5 py-2 rounded-xl bg-[#5B4A3E] text-white border border-[#5B4A3E]"
    : "px-5 py-2 rounded-xl bg-[#E8DED4] border border-[#8A8077] text-[#5B4A3E] hover:bg-[#D0917F] hover:text-white transition-all duration-300"}
    >
        {category}
    </button>
    ))}
    </div>
    );
}
export default CategoryPills;