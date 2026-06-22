import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Recipes from "../pages/Recipes/Recipes";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import AddRecipe from "../pages/AddRecipe/AddRecipe";
import Favorites from "../pages/Favorites/Favorites";
import Collections from "../pages/Collections/Collections";
import AIChef from "../pages/AIChef/AIChef";
import Profile from "../pages/Profile/Profile";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path="/add-recipe" element={<AddRecipe />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/ai-chef" element={<AIChef />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;
