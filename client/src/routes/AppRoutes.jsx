import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Recipes from "../pages/Recipes/Recipes";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import AddRecipe from "../pages/AddRecipe/AddRecipe";
import Favorites from "../pages/Favorites/Favorites";
import Categories from "../pages/Categories/Categories";
import GroceryList from "../pages/GroceryList/GroceryList"
import CookingStats from "../pages/CookingStats/CookingStats"
import AIChef from "../pages/AIChef/AIChef";
import Profile from "../pages/Profile/Profile";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import ForgotPassword from "../pages/ForgotPassword/Forgotpassword";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipe-details" element={<RecipeDetails />} />
      <Route path="/add-recipe" element={<AddRecipe />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/grocery-list" element={<GroceryList />} />
      <Route path="/cooking-stats" element={<CookingStats />} />
      <Route path="/ai-chef" element={<AIChef />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default AppRoutes;
