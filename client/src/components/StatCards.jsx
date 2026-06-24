function StatCard({ icon, title, value }) {
  return (
    <div
      className="
      bg-[#E8DED4]
      border
      border-[#8A8077]
      rounded-3xl
      p-5
      flex
      flex-col
      items-center
      justify-center
      text-center
      hover:shadow-lg
      hover:-translate-y-1
      duration-300
      transition-all"
    >
      <div className="text-3xl mb-3">
        {icon}
      </div>

      <p
        className="
        text-[17px]
        text-[#8A8077]
        font-source"
      >
        {title}
      </p>

      <h3
        className="
        text-3xl
        font-bold
        text-[#5B4A3E]
        mt-2"
      >
        {value}
      </h3>
    </div>
  );
}

export default StatCard;