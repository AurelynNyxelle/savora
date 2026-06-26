import MainLayout from "../../layouts/MainLayout";
import CategoryCard from "../../components/CategoryCard";
import { FiSearch } from "react-icons/fi";
function Categories() {
  const categories = [
    { title: "Desserts", count: 18 },
    { title: "Breakfast", count: 14 },
    { title: "Lunch", count: 21 },
    { title: "Dinner", count: 26 },
    { title: "Quick Meals", count: 12 },
    { title: "Snacks", count: 15 },
    { title: "Healthy", count: 17 },
    { title: "Drinks", count: 9 },
    { title: "International", count: 20 },
  ];

  return (
    <MainLayout>

      <div className="p-8">

       

        <div className="flex justify-between items-center">

          <div>

            <h1
              className="
              text-3xl
              font-tai
              font-bold
              text-[#5B4A3E]
              "
            >
              Categories
            </h1>

            <p
              className="
              mt-2
              text-[#8A8077]
              "
            >
              Browse recipes by category and discover something delicious.
            </p>

          </div>

          <div
            className="
            px-5
            py-3
            rounded-full
            bg-[#E8DED4]
            text-[#5B4A3E]
            font-semibold
            "
          >
            {categories.length} Categories
          </div>

        </div>

       

        <div
          className="
          mt-10
          flex
          items-center
          gap-3
          bg-[#F6F2EB]
          border
          border-[#E8DED4]
          rounded-2xl
          px-5
          py-3
          "
        >

          <FiSearch className="text-[#8A8077]" />

          <input
            type="text"
            placeholder="Search categories..."
            className="
            flex-1
            bg-transparent
            outline-none
            placeholder:text-[#8A8077]
            "
          />

        </div>

       

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
          mt-10
          "
        >

          {categories.map((category) => (

            <CategoryCard
              key={category.title}
              title={category.title}
              count={category.count}
            />

          ))}

        </div>

      </div>

    </MainLayout>
  );
}

export default Categories;