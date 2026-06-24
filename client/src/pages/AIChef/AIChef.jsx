import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import babychefmochi from "../../assets/babychefmochi.png";

function AIChef() {
  const navigate = useNavigate();

  return (
    <div
      className="
      min-h-screen
      bg-[#F6F2EB]
      px-8
      py-8
      "
    >
      <div
        onClick={() => navigate("/")}
        className="
        flex
        items-center
        gap-2
        cursor-pointer
        text-[#5B4A3E]
        hover:text-[#D0917F]
        transition-all
        w-fit
        mb-6
        "
      >
        <FiArrowLeft />
        <span>Back to Dashboard</span>
      </div>

      <h1
        className="
        text-4xl
        font-tai
        font-bold
        text-[#5B4A3E]
        mb-8
        "
      >
        AI Chef 👨‍🍳
      </h1>

      <div
        className="
        grid
        lg:grid-cols-[280px_1fr_400px]
        gap-6
        "
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
          text-center
          "
        >
          <img
            src={babychefmochi}
            alt="Baby Mochi"
            className="
            w-52
            h-52
            object-contain
            "
          />

          <h2
            className="
            mt-4
            text-2xl
            font-tai
            font-bold
            text-[#5B4A3E]
            "
          >
            🍪 Ready to cook something magical?
          </h2>

          <p
            className="
            mt-2
            font-source
            text-[#5B4A3E]
            "
          >
            I'm Mochi,
            your AI Chef.
          </p>

          <p
            className="
            mt-3
            text-sm
            text-[#8A8077]
            "
          >
            Tell me what ingredients
            you have and I'll whip up
            something delicious.
            ✨ I may also crave a little culinary chaos.
          </p>
        </div>

       

        <div
          className="
          bg-[#E8DED4]
          border
          border-[#8A8077]
          rounded-3xl
          p-6
          "
        >
          <h2
            className="
            text-2xl
            font-tai
            font-bold
            text-[#5B4A3E]
            mb-2
            "
          >
            What ingredients do you have?
          </h2>

          <p
            className="
            text-[#8A8077]
            mb-6
            "
          >
            Add ingredients and let
            Mochi create a recipe.
          </p>

          <div
            className="
            flex
            flex-wrap
            gap-3
            mb-6
            "
          >
            <span className="px-4 py-2 rounded-full bg-[#5B4A3E] text-white">
              Tomato ✕
            </span>

            <span className="px-4 py-2 rounded-full bg-[#5B4A3E] text-white">
              Onion ✕
            </span>

            <span className="px-4 py-2 rounded-full bg-[#5B4A3E] text-white">
              Paneer ✕
            </span>

            <span className="px-4 py-2 rounded-full bg-[#5B4A3E] text-white">
              Capsicum ✕
            </span>
          </div>

          <div className="flex gap-3">
            <input
              placeholder="Add ingredient..."
              className="
              flex-1
              p-3
              rounded-xl
              border
              border-[#8A8077]
              bg-white
              "
            />

            <button
              className="
              px-4
              rounded-xl
              bg-[#5B4A3E]
              text-white
              hover:bg-[#D0917F]
              transition-all
              "
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
            transition-all
            "
          >
            Generate Recipe ✨
          </button>
        </div>

       

        <div
          className="
          bg-[#E8DED4]
          border
          border-[#8A8077]
          rounded-3xl
          p-6
          "
        >
          <div
            className="
            h-48
            bg-[#D9D9D9]
            rounded-2xl
            mb-5
            "
          />

          <h2
            className="
            text-2xl
            font-tai
            font-bold
            text-[#5B4A3E]
            "
          >
            Creamy Paneer Delight
          </h2>

          <p
            className="
            text-[#8A8077]
            mt-2
            "
          >
            Cooking Time: 30 mins
          </p>

          <div className="mt-5">
            <h3 className="font-bold text-[#5B4A3E] mb-2">
              Ingredients
            </h3>

            <ul className="space-y-1 text-[#5B4A3E]">
              <li>• Paneer</li>
              <li>• Onion</li>
              <li>• Tomato</li>
              <li>• Capsicum</li>
            </ul>
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
            transition-all
            "
          >
            Save Recipe ❤️
          </button>
        </div>
      </div>
    </div>
  );
}

export default AIChef;