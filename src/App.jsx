
import './App.css';
import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import Progress from "./components/Progress";
import { useState, useEffect } from "react";

export default function App() {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  // 🔹 Save to localStorage every time habits change
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  // 🔹 Add new habit
  const addHabit = (name, goal) => {
    const newHabit = {
      id: Date.now(),
      name,
      goal,
      doneArray: Array(goal).fill(false),
    };
    setHabits((prev) => [...prev, newHabit]);
  };

  // 🔹 Toggle dot (mark as done/undone)
  const toggleDot = (habitId, dotIndex) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === habitId
          ? {
              ...habit,
              doneArray: habit.doneArray.map((d, i) =>
                i === dotIndex ? !d : d
              ),
            }
          : habit
      )
    );
  };

  // 🔹 Remove a habit
  const removeHabit = (habitId) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== habitId));
  };

  return (
    <div className="min-h-screen bg-sky-50">
      <Header />
      <main className="container mx-auto p-4">
        <HabitForm onAddHabit={addHabit} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-start">
          <HabitList
            habits={habits}
            onToggleDot={toggleDot}
            onRemove={removeHabit}
          />
          <Progress habits={habits} />
        </div>
      </main>
    </div>
  );
}