import HabitListItem from "./HabitListItem";

export default function HabitList({ habits, onToggleDot, onRemove }) {
  return (
    <div className="p-4 pt-0">
      <h2 className="text-sky-700 text-lg font-semibold mb-2 text-center md:text-left">
        Your habits today
      </h2>

      {habits.length === 0 ? (
        <p className="text-center text-sky-400 text-sm">
          Add your first habit to get started!
        </p>
      ) : (
        <div>
          {habits.map((habit, index) => (
            <HabitListItem
              key={habit.id}
              id={habit.id}
              index={index}
              name={habit.name}
              goal={habit.goal}
              doneArray={habit.doneArray}
              onToggleDot={onToggleDot}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}
    </div>
  );
}