import GroceryItems from "../../components/GroceryItems";
import babymochigrocery from "../../assets/babymochigrocery.png";
import babymochireminder from "../../assets/babymochireminder.png";
import { FiPlus } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import {BiCategory} from "react-icons/bi";
import MainLayout from "../../layouts/MainLayout";
function GroceryList() {
    return (
        <MainLayout>
         <div className="p-8">

      
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-3xl bg-[#E8DED4] flex items-center justify-center">
            <FiShoppingCart className="text-3xl text-[#5B4A3E]" />
          </div>

          <div>
            <h1 className="font-tai text-4xl font-bold text-[#5B4A3E]">
              Grocery List
            </h1>

            <p className="mt-2 text-[#8A8077]">
              All your ingredients, organized and ready for your next delicious meal.
            </p>
          </div>
        </div>

        <img
          src={babymochigrocery}
          alt="Mochi"
          className="w-56"
        />
      </div>

    
      <div className="mt-10 bg-[#E8DED4] border border-[#E4D9CF] rounded-3xl p-6 hover:-translate-y-1 transition-all duration-300">

        <h2 className="font-tai text-2xl font-bold text-[#5B4A3E] mb-5">
          Add a new item
        </h2>

        <div className="flex gap-4">

          <input
            type="text"
            placeholder="What do you need?"
            className="flex-1 border rounded-xl px-4 py-3 outline-none bg-white focus:border-[#D0917F]"
          />

          <button className="flex items-center gap-2 border rounded-xl px-6 bg-[#F6F2EB] hover:border-[#D0917F] active:scale-95 transition-all duration-300">
            <BiCategory />
            Select category
          </button>

          <button className="flex items-center gap-2 px-6 rounded-xl bg-[#5B4A3E] text-white hover:shadow-lg
          hover:-translate-y-1 active:scale-95 transition-all duration-300 hover:bg-[#D0917F] shadow-md">
            <FiPlus />
            Add Item
          </button>
        </div>

        <div className="flex gap-3 mt-5 items-center">
          <span className="text-[#5B4A3E]">Quick add:</span>

          {["Milk", "Eggs", "Tomatoes", "Onions", "Chicken"].map((item) => (
            <button
              key={item}
              className="px-4 py-2 rounded-full bg-[#F3ECE6] hover:bg-[#D0917F] hover:text-white transition"
            >
              {item}
            </button>
          ))}
        </div>

      </div>

     
      <div className="flex justify-between items-center mt-8">

        <div className="flex gap-3">
          {["All (15)", "To Buy (9)", "In Stock (6)", "Bought (3)"].map((filter) => (
            <button
              key={filter}
              className="px-6 py-3 rounded-full bg-[#F3ECE6] hover:bg-[#5B4A3E] hover:text-white transition"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 border border-[#E8DED4] rounded-xl px-4 py-3 bg-[#F6F2EB] w-72">
          <FiSearch className="text-[#8A8077]" />
          <input
          type="text"
            placeholder="Search groceries..."
           className="flex-1 bg-transparent outline-none placeholder:text-[#8A8077]" 
          />
        </div>

      </div>

      
      <div className="mt-8 flex flex-col lg:flex-row gap-6 hover:-translate-y-1 transition-all duration-300">
      <div className="lg:w-3/5 bg-[#E8DED4] border rounded-3xl p-6">
        <h2 className="font-tai text-3xl font-bold text-[#5B4A3E] mb-5">
          To Buy
        </h2>

        <div className="space-y-4">

          <GroceryItems
            type="todo"
            checked={false}
            emoji="🍅"
            name="Tomatoes"
            category="Produce"
            quantity="6 pcs"
          />

          <GroceryItems
            type="todo"
            checked={true}
            emoji="🥛"
            name="Milk"
            category="Dairy"
            quantity="1 L"
          />

          <GroceryItems
            type="todo"
            checked={false}
            emoji="🧄"
            name="Garlic"
            category="Produce"
            quantity="2 bulbs"
          />

          <GroceryItems
            type="todo"
            checked={false}
            emoji="🧅"
            name="Onions"
            category="Produce"
            quantity="4 pcs"
          />

        </div>
      </div>

        <div className="lg:w-2/5 bg-[#E8DED4] border rounded-3xl p-6 shadow:md hover:-translate-scale-y">
        <h2 className="font-tai text-3xl font-bold text-[#5B4A3E] mb-5">
          In Stock
        </h2>
    
        <div className="space-y-4">

          <GroceryItems
            type="stock"
            emoji="🧂"
            name="Salt"
            quantity="1 pack"
          />

          <GroceryItems
            type="stock"
            emoji="🍚"
            name="Rice"
            quantity="1 kg"
          />

          <GroceryItems
            type="stock"
            emoji="🥚"
            name="Eggs"
            quantity="6 pcs"
          />
          </div>
        </div>
  </div>
    

     
      <div className="mt-8 bg-[#E8DED4] border rounded-3xl p-6 flex justify-between items-center hover:-translate-y-1 active:scale-95 transition-all duration-300">

        <div>

          <h2 className="font-tai text-3xl font-bold text-[#5B4A3E]">
            Your Progress
          </h2>

          <p className="mt-2 text-[#5B4A3E]">
            You've completed 3 out of 15 items.
          </p>

          <div className="w-72 h-3 bg-[#E4D9CF] rounded-full mt-5 overflow-hidden">

            <div className="w-1/5 h-full bg-[#5B4A3E]" />

          </div>

        </div>

        <div className="flex items-center gap-8">

          <img
            src={babymochireminder}
            alt="Reminder Mochi"
            className="w-40"
          />

          <button className="border border-red-300 text-red-500 px-6 py-3 rounded-xl hover:bg-red-500 hover:text-white hover:shadow-lg
          hover:-translate-y-1 active:scale-95 transition-all duration-300">
            Clear Checked Items
          </button>

        </div>

      </div>

    </div>
    </MainLayout>
  );
}

export default GroceryList;
