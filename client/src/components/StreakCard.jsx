function StreakCard({streak}) {
const weekDays = ["M","T","W","T","F","S","S"];
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
      <h2
        className="
        text-2xl
        font-tai
        font-bold
        text-[#5B4A3E]
        "
      >
        Cooking Streak 🔥
      </h2>

      <p
        className="
        text-3xl
        font-bold
        text-[#5B4A3E]
        mt-4
        "
      >
        {streak} Days
      </p>

<div
  className="
  flex
  justify-between
  mt-6
  text-[#5B4A3E]
"
>
  {weekDays.map((day, index) => (
    <div
      key={index}
      className="flex flex-col items-center gap-2"
    >
      <div
        className={`
          w-4
          h-4
          rounded-full
          ${
            index < streak
              ? "bg-[#D0917F]"
              : "bg-[#D9D9D9]"
          }
        `}
      />

      <span className="text-sm text-[#8A8077]">
        {day}
      </span>
    </div>
  ))}
</div>
</div>
);
}
export default StreakCard;

