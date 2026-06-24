import MainLayout from "../../layouts/MainLayout";
import StatCard from "../../components/StatCards";
import InsightCard from "../../components/InsightCards";
import StreakCard from "../../components/StreakCard";
function CookingStats() {
    return (
        <MainLayout>
  <div className="space-y-6">

    
    <div>
      <h1 className="text-3xl font-tai font-bold text-[#5B4A3E]">
        My Cooking Stats 📊
      </h1>

      <p className="text-source text-[#8A8077] mt-2">
        A little snapshot of your cooking journey.
      </p>
    </div>

<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
  <StatCard
    icon="📖"
    title="Recipes Saved"
    value="42"
  />

  <StatCard
    icon="🤖"
    title="AI Recipes"
    value="17"
  />

  <StatCard
    icon="❤️"
    title="Favorites"
    value="23"
  />

  <StatCard
    icon="🕒"
    title="Cooking Hours"
    value="56"
  />
</div>
    
    <div className="grid md:grid-cols-2 gap-6">

  <InsightCard
    icon="🍅"
    title="Most Used Ingredient"
    value="Tomato"
    subtitle="Used in 18 recipes"
  />

  <InsightCard
    icon="🍝"
    title="Favorite Category"
    value="Italian"
    subtitle="24 recipes cooked"
  />

</div>
   <StreakCard streak={5} />
  </div>
  </MainLayout>
    );
}
export default CookingStats;