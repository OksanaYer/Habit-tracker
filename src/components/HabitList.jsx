import HabitListItem from "./HabitListItem";

export default function HabitList({ habits, onToggleDot }) {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <h2 className="text-xl font-semibold text-sky-700 mb-4 text-center">
        Your habits today
      </h2>

      {habits.length === 0 ? (
        <p className="text-gray-400 text-center italic">
          No habits yet. Add one above!
        </p>
      ) : (
        <div className="grid gap-3">
          {habits.map((habit, index) => (
            <HabitListItem
              key={habit.id}
              index={index}
              id={habit.id}
              name={habit.name}
              goal={habit.goal}
              doneArray={habit.doneArray}
              onToggleDot={onToggleDot}
            />
          ))}
        </div>
      )}
    </div>
  );
}