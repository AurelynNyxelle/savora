import FavoriteCard from "../../components/FavoriteCard";
import MainLayout from "../../layouts/MainLayout";
import { FiSearch } from "react-icons/fi";
function Favorites() {
    const favorites = [
{
  id:1,
  title:"Choco Lava Cake",
  category:"Dessert",
  time:"45 mins",
  rating:"4.8",
},
{
  id:2,
  title:"Butter Chicken",
  category:"Indian",
  time:"50 mins",
  rating:"4.9",
},
{
  id:3,
  title:"Alfredo Pasta",
  category:"Italian",
  time:"30 mins",
  rating:"4.7",
},
{
  id:4,
  title:"Blueberry Pancakes",
  category:"Breakfast",
  time:"25 mins",
  rating:"4.6",
}
];
return (
  <MainLayout>
  <div className="space-y-8">

    <div>
      <h1
        className="
        text-3xl
        font-tai
        font-bold
        text-[#5B4A3E]
        "
      >
        Favorites ❤️
      </h1>

      <p
        className="
        mt-2
        font-source
        text-[#8A8077]
        "
      >
        Your saved recipes in one cozy place.
      </p>
    </div>

    <div className="flex gap-4">
    <div className="relative flex-1">

      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8077]" />
      <input
        placeholder="Search favorites..."
        className="
        w-full
        pl-12
        p-3
        rounded-xl
        border
        border-[#8A8077]
        bg-white
        "
      />
      </div>
      <select
        className="
        p-3
        rounded-xl
        border
        border-[#8A8077]
        bg-[#E8DED4]"
      >
        <option>Recently Saved</option>
        <option>Highest Rated</option>
        <option>A-Z</option>
        <option>Cooking Time</option>
      </select>
    </div>

     <div className="flex flex-wrap gap-3">

  <button className="
  px-4 py-2
  rounded-full
  bg-[#5B4A3E]
  text-white
  text-sm
  hover:bg-[#D0917F]
  hover:text-white 
  transition-all 
  duration-300
  ">
    All
  </button>

  <button className="
  px-4 py-2
  rounded-full
  bg-[#E8DED4]
  border
  hover:bg-[#D0917F] 
  hover:text-white
  transition-all 
  duration-300
  border-[#8A8077]
  ">
    Dessert
  </button>

  <button className="
  px-4 py-2
  rounded-full
  bg-[#E8DED4]
  border
  border-[#8A8077]
  hover:bg-[#D0917F]
  hover:text-white 
  transition-all 
  duration-300
  ">
    Breakfast
  </button>

  <button className="
  px-4 py-2
  rounded-full
  bg-[#E8DED4]
  border
  border-[#8A8077]
  hover:bg-[#D0917F] 
  hover:text-white 
  transition-all 
  duration-300
  ">
    Lunch
  </button>

  <button className="
  px-4 py-2
  rounded-full
  bg-[#E8DED4]
  border
  border-[#8A8077]
  hover:bg-[#D0917F]
  hover:text-white 
  transition-all 
  duration-300
  ">
    Dinner
  </button>

 <button className="
  px-4 py-2
  rounded-full
  bg-[#E8DED4]
  border
  border-[#8A8077]
  hover:bg-[#D0917F]
  hover:text-white 
  transition-all 
  duration-300
  ">
    Quick Meals
  </button>
   <button className="
  px-4 py-2
  rounded-full
  bg-[#E8DED4]
  border
  border-[#8A8077]
  hover:bg-[#D0917F]
  hover:text-white 
  transition-all 
  duration-300
  ">
    Snacks
  </button>

   <button className="
  px-4 py-2
  rounded-full
  bg-[#E8DED4]
  border
  border-[#8A8077]
  hover:bg-[#D0917F]
  hover:text-white 
  transition-all 
  duration-300
  ">
    Healthy
  </button>
   <button className="
  px-4 py-2
  rounded-full
  bg-[#E8DED4]
  border
  border-[#8A8077]
  hover:bg-[#D0917F]
  hover:text-white 
  transition-all 
  duration-300
  ">
    Drinks
  </button>

   <button className="
  px-4 py-2
  rounded-full
  bg-[#E8DED4]
  border
  border-[#8A8077]
  hover:bg-[#D0917F]
  hover:text-white 
  transition-all 
  duration-300
  ">
    International
  </button>

</div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      <div className="
        bg-[#E8DED4]
        border
        border-[#8A8077]
        rounded-2xl
        shadow-sm
        hover:shadow-md
        hover:-translate-y-1
        transition-all
        p-4
        text-center
      ">
        <div className="text-2xl">
        ❤️
        </div>
        <h3 className="text-xl font-bold mt-2">12</h3>
        <p>Total Favorites</p>
      </div>

      <div className="
        bg-[#E8DED4]
        border
        border-[#8A8077]
        shadow-sm
        hover:shadow-md
        hover:-translate-y-1
        transition-all
        rounded-2xl
        p-4
        text-center
      ">
         <div className="text-2xl">
        🍰
        </div>
        <h3 className="text-xl font-bold mt-2">4</h3>
        <p>Desserts</p>
      </div>

      <div className="
        bg-[#E8DED4]
        border
        border-[#8A8077]
        rounded-2xl
        shadow-sm
        hover:shadow-md
        hover:-translate-y-1
        transition-all
        p-4
        text-center
      ">
         <div className="text-2xl">
        🥗
        </div>
        <h3 className="text-xl font-bold mt-2">5</h3>
        <p>Main Dishes</p>
      </div>

      <div className="
        bg-[#E8DED4]
        border
        border-[#8A8077]
        rounded-2xl
        shadow-sm
        hover:shadow-md
        hover:-translate-y-1
        transition-all
        p-4
        text-center
      ">
         <div className="text-2xl">
        🥤
        </div>
        <h3 className="text-xl font-bold mt-2">3</h3>
        <p>Drinks</p>
      </div>

    </div>


    <div className="grid md:grid-cols-2 gap-6">

      {favorites.map((recipe) => (
        <FavoriteCard
          key={recipe.id}
          title={recipe.title}
          category={recipe.category}
          time={recipe.time}
          rating={recipe.rating}
        />
      ))}

    </div>

  </div>
</MainLayout>
);
}
export default Favorites;