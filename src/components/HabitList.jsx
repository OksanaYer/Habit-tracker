import HabitListItem from "./HabitListItem";

export default function HabitList() {
  const demoHabits = [
    { id: 1, name: "Drink water", goal: 8, done: 3 },
    { id: 2, name: "Walk", goal: 2, done: 1 },
    { id: 3, name: "Read", goal: 1, done: 0 },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <h2 className="text-xl font-semibold text-sky-700 mb-4 text-center">
        Your habits today
      </h2>

      <div className="grid gap-3">
        {demoHabits.map((habit) => (
          <HabitListItem
            key={habit.id}
            name={habit.name}
            done={habit.done}
            goal={habit.goal}
          />
        ))}
      </div>
    </div>
  );
}