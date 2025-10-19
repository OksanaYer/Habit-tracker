import { useState } from "react";

export default function HabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");
  const [goal, setGoal] = useState(1);

  const increase = () => setGoal((p) => Math.min(p + 1, 10));
  const decrease = () => setGoal((p) => Math.max(p - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = habitName.trim();
    if (!name) return;

    onAddHabit(name, goal);
    setHabitName("");
    setGoal(1);
  };

  return (
    <div className="max-w-xl mx-auto mt-6 mb-4 bg-white rounded-xl shadow-md p-4">
      <h2 className="text-lg font-semibold text-sky-700 mb-3 text-center">
        Add a new habit
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row sm:items-center gap-2"
      >
        {/* Input */}
        <input
          type="text"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          placeholder="Enter your habit..."
          className="flex-1 border border-sky-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
        />

        {/* Counter buttons */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={decrease}
            className="px-2 py-1 bg-pink-300 text-white font-bold rounded hover:bg-pink-400"
          >
            −
          </button>
          <span className="px-2 text-sky-700 font-medium">{goal}</span>
          <button
            type="button"
            onClick={increase}
            className="px-2 py-1 bg-pink-300 text-white font-bold rounded hover:bg-pink-400"
          >
            +
          </button>
        </div>

        {/* Compact Save button */}
        <button
          type="submit"
          className="bg-sky-500 text-white font-semibold px-4 py-2 rounded hover:bg-sky-600 transition sm:self-stretch"
        >
          Save
        </button>
      </form>
    </div>
  );
}