
import HowMany from "./HowMany";

export default function HabitForm() {
  return (
    <div className="card bg-white shadow-md p-4 mx-auto my-6 w-full max-w-lg rounded-lg">
      <h2 className="text-xl font-semibold text-sky-700 mb-3 text-center">
        Add a new habit
      </h2>

      {/* input + counter */}
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter your habit..."
          className="input input-bordered flex-1 border-sky-200 focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
        />

        {/*  counter */}
        <div className="flex items-center gap-1">
          <button className="btn btn-xs bg-pink-300 hover:bg-pink-400 text-white font-bold rounded-full px-2">
            −
          </button>
          <span className="px-2 text-sky-700 font-medium">3</span>
          <button className="btn btn-xs bg-pink-300 hover:bg-pink-400 text-white font-bold rounded-full px-2">
            +
          </button>
        </div>
      </div>

      {/* Save button */}
      <button className="btn bg-sky-500 hover:bg-sky-600 text-white w-full rounded-md">
        Save habit
      </button>
    </div>
  );
}
