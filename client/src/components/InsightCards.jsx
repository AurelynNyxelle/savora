function InsightCard({
  icon,
  title,
  value,
  subtitle,
}) {
  return (
    <div
      className="
      bg-[#E8DED4]
      border
      border-[#8A8077]
      rounded-3xl
      p-6
      hover:shadow-lg
      hover:-translate-y-1
      duration-300
      transition-all
      "
    >
      <div className="text-4xl mb-4">
        {icon}
      </div>

      <h3
        className="
        font-tai
        text-xl
        font-bold
        text-[#5B4A3E]
        "
      >
        {title}
      </h3>

      <p
        className="
        text-2xl
        font-bold
        text-[#5B4A3E]
        mt-3
        "
      >
        {value}
      </p>

      <p
        className="
        text-[#8A8077]
        mt-2
        "
      >
        {subtitle}
      </p>
    </div>
  );
}

export default InsightCard;
