function CategoryCard({
  title,
  count,
}) {
  return (
    <div
      className="
      bg-[#E8DED4]
      border
      border-[#F6F2EB]
      rounded-3xl
      overflow-hidden
      cursor-pointer
      hover:shadow-xl
      hover:-translate-y-1
      transition-all
      duration-300
      "
    >
      
      <div className="h-40 bg-gray-300" />

      <div className="p-5">
        <h3
          className="
          font-tai
          text-2xl
          font-bold
          text-[#5B4A3E]
          "
        >
          {title}
        </h3>

        <p
          className="
          mt-2
          text-[#8A8077]
          "
        >
          {count} Recipes
        </p>
      </div>
    </div>
  );
}

export default CategoryCard;


