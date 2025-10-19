export default function HabitListItem({ index, id, name, doneArray, goal, onToggleDot }) {
  // calculate number of completed dots
  const doneCount = doneArray.filter(Boolean).length;
  const progress = Math.round((doneCount / goal) * 100);

  return (
    <div className="bg-white border border-sky-100 shadow-sm rounded-lg p-4 flex justify-between items-center hover:shadow-md transition">
      {/* Left section: name + circles */}
      <div className="flex-1">
        <h3 className="text-lg font-medium text-sky-800">
          {index + 1}. {name}
        </h3>

        {/* progress dots */}
        <div className="flex mt-2 flex-wrap gap-1">
          {Array.from({ length: goal }).map((_, i) => (
            <span
              key={i}
              onClick={() => onToggleDot(id, i)}
              className={`inline-block w-4 h-4 rounded-full cursor-pointer border transition ${
                doneArray[i]
                  ? "bg-sky-500 border-sky-500"
                  : "bg-white border-sky-300 hover:bg-sky-100"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Right section: progress percentage */}
      <div className="text-right min-w-[60px]">
        <span className="text-sky-600 font-bold">{progress}%</span>
      </div>
    </div>
  );
}
