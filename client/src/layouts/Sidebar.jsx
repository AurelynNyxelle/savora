function Sidebar() {
    return (
        <div className="w-64 min-h-screen border-r p-6">
            <h1 className="text-3xl font-bold mb-8">
                Savora
            </h1>
            <ul className="space-y-4">
                <li> Dashboard </li>
                <li> Recipes </li>
                <li> AI Chef </li>
                <li> Collections </li>
                <li> Favorites </li>
                <li> Profile </li>
            </ul>
        </div>
    );
}
export default Sidebar;