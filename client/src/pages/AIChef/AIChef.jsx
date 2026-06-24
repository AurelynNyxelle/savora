import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";
import { FiBook } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";

import babychefmochi from "../../assets/babychefmochi.png";

function AIChef() {
  const navigate = useNavigate("/");
  const userName = "Chef";
  const mochiTips = [
  "More ingredients, more magical recipes!",
  "Fresh ingredients make the happiest dishes",
  "Try mixing cuisines for surprising results",
  "A pinch of creativity goes a long way",
  "Don't forget to garnish. Mochi is watching",
  "Leftovers can become tomorrow's masterpiece",
  "Cooking is just edible experimentation",
];

const randomTip =
  mochiTips[new Date().getDate() % mochiTips.length];

  return (
    <div
      className="
      min-h-screen
      bg-[#F6F2EB]
      px-8
      py-8"
    >
      <div
        className="
        flex
        items-center 
        gap-3
        mb-6"
      >
        <FiArrowLeft
        onClick={() => navigate("/")}
        className="cursor-pointer text-[26px] text-[#5B4A3E] hover:text-[#D0917F] transition-all" />
        <span className="text-[26px] font-tai font-medium text-[#5B4A3E]">Back to Dashboard</span>
      </div>

      <h1
        className="
        text-[32px]
        font-tai
        font-bold
        text-[#5B4A3E]
        mb-8"
      >
        AI Chef 
      </h1>

      <div
        className="
        grid
        lg:grid-cols-[280px_1fr_400px]
        gap-6"
      >
        

        <div
          className="
          bg-[#E8DED4]
          border
          border-[#8A8077]
          rounded-3xl
          p-6
          flex
          flex-col
          items-center
          text-center"
        >
          <img
            src={babychefmochi}
            alt="Baby Mochi"
            className="
            w-64
            h-64
            object-contain"
          />

          <h2
            className="
            mt-4
            text-2xl
            font-tai
            font-bold
            text-[#5B4A3E]"
          >
            Welcome back {userName}!
           🍪 Ready to cook something magical?
          </h2>

          <p
            className="
            mt-2
            font-source
            text-[#5B4A3E]"
          >
            I'm Mochi,
            your AI Chef.
          </p>

          <p
            className="
            mt-3
            text-sm
            font-source
            text-[#8A8077]"
          >
            Tell me what ingredients
            you have and I'll whip up
            something delicious.
            ✨ I may also crave a little culinary chaos.
          </p>
          <div className="mt-auto pt-8">
            <FiHeart className="mx-auto text-[#5B4A3E] text-xl
              hover:shadow-lg
              hover:-translate-y-1
              active:scale-95
              transition-all" />
            </div>
        </div>

       

        <div
          className="
          bg-[#E8DED4]
          border
          border-[#8A8077]
          rounded-3xl
          p-6"
        >
          <h2
            className="
            text-2xl
            font-tai
            font-bold
            text-[#5B4A3E]
            mb-2"
          >
            What ingredients do you have?
          </h2>

          <p
            className="
            text-[#8A8077]
            font-source
            mb-6"
          >
            Add ingredients and let
            Mochi create a recipe.
          </p>

          <div
            className="
            flex
            flex-wrap
            gap-3
            mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-[#F6F2EB] border border-[#8A8077] text-[#5B4A3E] hover:bg-[#D0917F]">
              Tomato ✕
            </span>

            <span className="px-4 py-2 rounded-full bg-[#F6F2EB] border border-[#8A8077] text-[#5B4A3E] hover:bg-[#D0917F]">
              Onion ✕
            </span>

            <span className="px-4 py-2 rounded-full bg-[#F6F2EB] border border-[#8A8077] text-[#5B4A3E] hover:bg-[#D0917F]">
              Paneer ✕
            </span>

            <span className="px-4 py-2 rounded-full bg-[#F6F2EB] border border-[#8A8077] text-[#5B4A3E] hover:bg-[#D0917F]">
              Capsicum ✕
            </span>
          </div>

          <div className="flex gap-3 mb-4">
            <input
              placeholder="Add ingredient..."
              className="
              flex-1
              p-3
              rounded-xl
              border
              border-[#8A8077]
              bg-white"
            />

            <button
              className="
              px-4
              rounded-xl
              bg-[#5B4A3E]
              text-white
              hover:bg-[#D0917F]
              hover:shadow-lg
              hover:-translate-y-1
              active:scale-95
              transition-all"
            >
              <FiPlus />
            </button>
          </div>

          <button
            className="
            mt-6
            w-full
            py-3
            rounded-xl
            bg-[#5B4A3E]
            text-white
            hover:bg-[#D0917F]
            hover:shadow-lg
            hover:-translate-y-1
            active:scale-95
            transition-all"
          >
            Generate Recipe ✨
          </button>
           <div className="mt-8 bg-[#F6F2EB] border border-[#8A8077] rounded-2xl p-4">
          <h3 className="font-source font-bold text-[#5B4A3E] mb-2">
            ✨ Tip from Mochi 
          </h3>
          <p className="text-[#8A8077] text-sm">
            {randomTip}
          </p>
         </div>
        </div>
         
       

        <div
          className="
          bg-[#E8DED4]
          border
          border-[#8A8077]
          rounded-3xl
          p-6"
        >
          <h2 className="text-2xl font-tai font-bold text-[#5B4A3E] mb-5">
            Suggested Recipe
          </h2>
          <div
            className="
            h-48
            bg-[#D9D9D9]
            rounded-2xl
            mb-5"
          />
          <div className="flex justify-between items-center">
          <h2
            className="
            text-2xl
            font-tai
            font-bold
            text-[#5B4A3E]"
          >
            Creamy Paneer Delight
          </h2>
          <span className="font-medium text-[#5B4A3E]"> ⭐ 4.8 </span>
          </div>

          <div className="mt-5">
            <h3 className="font-bold font-source text-[#5B4A3E] mb-2">
              Ingredients
            </h3>

            <ul className="space-y-1 text-[#5B4A3E]">
              <li>• Paneer</li>
              <li>• Onion</li>
              <li>• Tomato</li>
              <li>• Capsicum</li>
            </ul>
          </div>
          <p
            className="
            text-[#8A8077]
            font-source
            mt-2"
          >
            Cooking Time: 30 mins
          </p>
         <div className="mt-6 flex gap-3">
          <button
            className="
            flex-1
            flex
            items-center
            justify-center
            py-3
            gap-2
            rounded-xl
            border
            border-[#5B4A3E]
            text-[#5B4A3E]
            hover:bg-[#F6F2EB]
            hover:shadow-lg
            hover:-translate-y-1
            active:scale-95
            transition-all"
          >
            <FiBook />
            View Full Recipe
          </button>

           <button
            className="
            flex-1
            flex
            gap-2
            items-center
            justify-center
            py-3
            rounded-xl
            bg-[#5B4A3E]
            text-white
            hover:bg-[#D0917F]
            hover:shadow-lg
            hover:-translate-y-1
            active:scale-95
            transition-all"
          >
            <FiBookmark />
            Save To Journal
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIChef;