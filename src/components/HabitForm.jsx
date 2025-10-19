import { useState } from "react";

export default function HabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");
  const [count, setCount] = useState(1);

  const increase = () => setCount((p) => Math.min(p + 1, 10));
  const decrease = () => setCount((p) => Math.max(p - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = habitName.trim();
    if (!name) return;

    // Send new habit data to App.jsx
    onAddHabit({
      id: Date.now(),
      name,
      goal: count,
    });

    // Reset inputs after saving
    setHabitName("");
    setCount(1);
  };

  return (
    <div className="card bg-white shadow-md p-4 mx-auto my-6 w-full max-w-lg rounded-lg">
      <h2 className="text-xl font-semibold text-sky-700 mb-3 text-center">
        Add a new habit
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Row: input + counter */}
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            value={habitName}
            onChange={(e) => setHabitName(e.target.value)}
            placeholder="Enter your habit..."
            className="flex-1 border border-sky-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={decrease}
              className="px-3 py-1 bg-pink-300 text-white font-bold rounded hover:bg-pink-400"
            >
              −
            </button>
            <span className="px-2 text-sky-700 font-medium">{count}</span>
            <button
              type="button"
              onClick={increase}
              className="px-3 py-1 bg-pink-300 text-white font-bold rounded hover:bg-pink-400"
            >
              +
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-sky-500 text-white font-semibold py-2 rounded hover:bg-sky-600 transition"
        >
          Save habit
        </button>
      </form>
    </div>
  );
}