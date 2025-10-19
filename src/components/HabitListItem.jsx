export default function HabitListItem({
  index,
  id,
  name,
  goal,
  doneArray,
  onToggleDot,
  onRemove,
}) {
  const doneCount = doneArray.filter(Boolean).length;
  const progress = Math.round((doneCount / goal) * 100);

  return (
    <div className="bg-white border border-sky-100 rounded-lg shadow-sm p-3 mb-2 hover:shadow transition-all duration-150">
      {/* Title and remove button */}
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-sky-800 font-medium text-sm sm:text-base">
          {index + 1}. {name}
        </h3>
        <button
          onClick={() => onRemove(id)}
          className="text-xs sm:text-sm text-red-500 hover:text-red-700 font-semibold"
        >
          Remove
        </button>
      </div>

      {/* Dots + percentage in one row */}
      <div className="flex justify-between items-center">
        <div className="flex flex-wrap gap-1">
          {Array.from({ length: goal }).map((_, i) => (
            <span
              key={i}
              onClick={() => onToggleDot(id, i)}
              className={`w-3.5 h-3.5 rounded-full cursor-pointer border transition ${
                doneArray[i]
                  ? "bg-sky-500 border-sky-500"
                  : "bg-white border-sky-300 hover:bg-sky-100"
              }`}
            ></span>
          ))}
        </div>
        <span className="text-sky-600 text-xs sm:text-sm font-semibold">
          {progress}%
        </span>
      </div>
    </div>
  );
}