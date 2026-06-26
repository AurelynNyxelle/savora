import MainLayout from "../../layouts/MainLayout";
import RecipeCard from "../../components/RecipeCards";
import CategoryPill from "../../components/CategoryPills";
import { FiSearch } from "react-icons/fi";
import { FiFilter } from "react-icons/fi";

function Recipes() {
  const recipes = Array.from({ length: 12 });

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
              All Recipes
            </h1>

            <p
              className="
              mt-2
              text-[#8A8077]
              "
            >
              Discover every recipe you've saved, all in one place.
            </p>
          </div>

          <div
            className="
            px-5
            py-3
            rounded-full
            bg-[#E8DED4]
            text-[#5B4A3E]
            font-source
            font-semibold
            "
          >
            {recipes.length} {recipes.length===1 ? "Recipe" : "Recipes"}
          </div>

        </div>

    
        <div
          className="
          flex
          justify-between
          items-center
          mt-10
          gap-6
          "
        >

          <div
            className="
            flex
            items-center
            gap-3
            flex-1
            bg-[#FFF9F5]
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
              placeholder="Search recipes..."
              className="
              flex-1
              bg-transparent
              outline-none
              placeholder:text-[#8A8077]
              "
            />
          </div>
          <div className="flex items-center gap-2">
            <FiFilter className="text-[#5B4A3E]" />
          <select className="
            px-4
            py-3
            rounded-2xl
            border
            border-[#E8DED4]
            bg-[#FFF9F5]
            outline-none
            text-[#5B4A3E]
            cursor-pointer
            hover:bg-[#F3ECE6]
            transition-all
            duration-300
            "
          >
            <option>Newest</option>
            <option>Oldest</option>
            <option>A - Z</option>
            <option>Z - A</option>
            <option>Cooking Time</option>
          </select>
        </div>
        </div>
    
        <div
          className="
          flex
          flex-wrap
          gap-3
          mt-8
          "
        >

         <CategoryPill />
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

          {recipes.map((_, index) => (
            <RecipeCard key={index} />
          ))}

        </div>

        
        <div
          className="
          flex
          justify-center
          mt-12
          "
        >

          <button
            className="
            px-10
            py-3
            rounded-2xl
            mt-14
            mb-8
            bg-[#5B4A3E]
            text-white
            hover:bg-[#D0917F]
            active:scale-95
            hover:-translate-y-1
            transition-all
            duration-300
            "
          >
            Load More Recipes
          </button>

        </div>

      </div>
    </MainLayout>
  );
}

export default Recipes;