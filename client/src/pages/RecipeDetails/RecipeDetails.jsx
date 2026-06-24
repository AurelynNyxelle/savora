import MainLayout from "../../layouts/MainLayout";
import {
  FiArrowLeft,
  FiEdit2,
  FiHeart,
  FiClock,
  FiShare2,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function RecipeDetails() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div
        className="
        max-w-4xl
        mx-auto
        bg-[#E8DED4]
        rounded-3xl
        border
        border-[#8A8077]
        overflow-hidden"
        >
        
        <div className="relative">
          <button
            onClick={() => navigate("/recipes")}
            className="
            absolute
            top-4
            left-4
            z-10
            bg-white/90
            p-3
            text-xl
             hover:scale-110 
             active:scale-95 
             transition-all
            rounded-full"
          >
            <FiArrowLeft />
          </button>

          <div className="absolute top-4 right-4 flex gap-3 z-10">
            <button
              className="
              bg-white/90
              p-3
              rounded-full
              hover:bg-[#D0917F]
              hover:text-white
              text-xl 
              hover:scale-110 
              active:scale-95 
              transition-all"
            >
              <FiEdit2 />
            </button>

            <button
              className="
              bg-white/90
              p-3
              rounded-full
              hover:bg-[#D0917F]
              text-xl 
              hover:scale-110 
              active:scale-95 
              hover:text-white
              transition-all"
            >
              <FiHeart />
            </button>
          </div>

        <div className="w-full h-80 bg-[#D9D9D9]"/>
        </div>

        
        <div className="p-8 bg-[#E8DED4]">
          <h1
            className="
            text-4xl
            font-tai
            font-bold
            text-[#5B4A3E]"
          >
            Butter Paneer
          </h1>

          <div
            className="
            flex
            gap-8
            mt-4
            text-[#5B4A3E]
            font-source"
          >
            <span>⭐ 4.8</span>
            <span>
              <FiClock className="inline mr-1" />
              40 mins
            </span>
            <span>🍛 Indian</span>
            <span>🔥 Medium</span>
          </div>

        
          <h2
            className="
            font-tai
            text-2xl
            font-bold
            mt-8
            mb-4
            text-[#5B4A3E]"
          >
            Ingredients
          </h2>

          <ul
            className="
            grid
            grid-cols-2
            gap-y-3
            font-source
            text-[#5B4A3E]"
          >
            <li>• Paneer - 250g</li>
            <li>• Butter - 2 tbsp</li>
            <li>• Onion - 2</li>
            <li>• Cream - 3 tbsp</li>
            <li>• Tomato - 3</li>
            <li>• Salt - To Taste</li>
          </ul>

          
          <h2
            className="
            font-tai
            text-2xl
            font-bold
            mt-8
            mb-4
            text-[#5B4A3E]"
          >
            Procedure
          </h2>

          <ol
            className="
            space-y-3
            font-source
            text-[#5B4A3E]"
          >
            <li>1. Heat butter in a pan.</li>
            <li>2. Add chopped onions and sauté.</li>
            <li>3. Add tomato puree.</li>
            <li>4. Add spices and cook well.</li>
            <li>5. Add paneer cubes.</li>
            <li>6. Garnish and serve hot.</li>
          </ol>

        
          <h2
            className="
            font-tai
            text-2xl
            font-bold
            mt-8
            mb-4
            text-[#5B4A3E]"
          >
            Garnishing
          </h2>

          <p
            className="
            font-source
            text-[#5B4A3E]"
          >
            Fresh coriander, cream
          </p>

          
          <div className="flex gap-4 mt-10">
            <button
              className="
              flex-1
              py-3
              rounded-xl
              border
              border-[#8A8077]
              font-source
              text-[#5B4A3E]
              hover:bg-[#E8DED4]
              active:scale-95
              transition-all"
            >
              <FiShare2 className="inline mr-2" />
              Share
            </button>

            <button
              className="
              flex-1
              py-3
              rounded-xl
              bg-[#5B4A3E]
              text-white
              hover:bg-[#D0917F]
              active:scale-95
              transition-all
              duration-300
              font-source"
            >
              <FiEdit2 className="inline mr-2" />
              Edit Recipe
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default RecipeDetails;
