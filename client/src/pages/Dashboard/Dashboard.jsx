import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/SearchBar";
import CategoryPills from "../../components/CategoryPills";
import RecipeCard from "../../components/RecipeCards";
function Dashboard() {
    return (
        <MainLayout>
            <div className="space-y-6">
                <div>
            <h1 className="text-3xl font-bold">
                Welcome back, Aurelyn 💗✨🦢
            </h1>
            <p className="text-gray-500 mt-2">
                What are we cooking today?
            </p>
            </div>
            <SearchBar />
            <CategoryPills />
            <div className="grid grid-cols-3 gap-6">
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
            </div>
          </div>
        </MainLayout>
    )
}
export default Dashboard;