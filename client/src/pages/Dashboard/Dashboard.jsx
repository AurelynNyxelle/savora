import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/SearchBar";
import CategoryPills from "../../components/CategoryPills";
import RecipeCard from "../../components/RecipeCards";

function Dashboard() {
    
     const userName = "Chef";
    return (
        <MainLayout>
            <div className="space-y-6 font-source">
                <div>
            <h1 className="text-3xl font-tai font-bold">
                Welcome back, {userName} 💗✨🦢
            </h1>
            <p className="text-[#8A8077] mt-2">
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