import MainLayout from "../../layouts/MainLayout";
import { FiArrowLeft } from "react-icons/fi";
function AddRecipe() {
  return (
    <MainLayout>
      <div className="bg-[#E8DED4] border-2 border-[#8A8077] min-h-[80vh] rounded-3xl pt-8 px-8 pb-4 max-w-6xl mx-auto space-y-5">
        <div className="flex items-center gap-3 mb-4">
            <FiArrowLeft
            className="text-2xl cursor-pointer" />
        <h1 className="text-2xl font-bold"> 
          Add New Recipe
        </h1>
        </div>

        <div className="grid grid-cols-[1fr_1.1fr] gap-8">

          <div className="space-y-4">

            <div className="h-48 border-2 border-dashed border-[#8A8077] rounded-2xl flex items-center justify-center">
              Upload Image
            </div>
            <div className="space-y-2">
                <label className="font-medium text-[#5B4A3E]">
                    Recipe Title
                </label>
            <input
              type="text"
              placeholder="e.g Creamy Mushroom Pasta"
              className="w-full border rounded-xl p-3"
            />
            </div>
            
            <div className="space-y-2">
                <label className="font-medium text-[#5B4A3E]">
                    Category
                </label>
            <select className="w-full border rounded-xl p-3">
                <option value="">
                    Select Category
                </option>
              <option>Desserts</option>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Quick Meals</option>
              <option>Healthy</option>
            </select>
            </div>

            <div className="space-y-2">
                <label className="font-medium text-[#5B4A3E]">
                    Cooking Time
                </label>
                </div>
            <input
              type="text"
              placeholder="e.g 30 mins"
              className="w-full border rounded-xl p-3"
            />
          </div>
           
        <div className="space-y-2">
          <label className="font-medium text-[#5B4A3E]">
                Ingredients 
            </label>
            <div className="flex items-center gap-3">
          <input
          placeholder="Add Ingredient"
          className="flex-1 border rounded-xl p-3"
        />
        <button
         className="
         px-4
         py-3
         rounded-xl
         bg-[#5B4A3E]
         text-white
         flex-item-center justify-center
         hover:bg-[#D0917F]
         transition-all">
            +
        </button>
        </div>
             <div className="space-y-2">
                <label className="font-medium text-[#5B4A3E]">
                    Procedure
                </label>
            <textarea
              placeholder="Write step by step procedure"
              rows="6"
              className="w-full h-40 border-2 border-[#8A8077] border rounded-xl p-3"
            />
            </div>
              <div className="space-y-2">
                <label className="font-medium text-[#5B4A3E]">
                    Garnishing
                </label>
            <input
              type="text"
              placeholder="e.g Fresh coriander, Cream"
              className="w-full border rounded-xl p-3"
            />
            </div>
          </div>
        </div>

        <button
          className="w-full py-3 rounded-xl bg-[#5B4A3E] text-white hover:bg-[#D09174] hover:shadow-lg
          hover:-translate-y-1 active:scale-95 transition-all duration-300">
          Save Recipe
        </button>
        </div>
    </MainLayout>
  );
}

export default AddRecipe;
