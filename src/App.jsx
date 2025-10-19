
import './App.css';
import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import Progress from "./components/Progress";
import { useState, useEffect } from "react";


export default function App() {
  const [habits, setHabits] = useState([]);

  // Load saved habits on first mount
  useEffect(() => {
  try {
    const saved = JSON.parse(localStorage.getItem("habits"));
    if (Array.isArray(saved)) {
      setHabits(saved);
    }
  } catch (err) {
    console.error("Failed to load habits:", err);
  }
}, []);

// Save habits to localStorage whenever habits change
useEffect(() => {
  if (habits.length > 0) {
    localStorage.setItem("habits", JSON.stringify(habits));
  }
}, [habits]);

  // Add a new habit (coming from HabitForm)
  const handleAddHabit = (newHabit) => {
    setHabits((prev) => [
      ...prev,
      { ...newHabit, doneArray: Array(newHabit.goal).fill(false) },
    ]);
  };

  // Toggle a dot in a habit by index
  const handleToggleDot = (habitId, index) => {
    setHabits((prev) =>
      prev.map((h) =>
        h.id === habitId
          ? {
              ...h,
              doneArray: h.doneArray.map((dot, i) => (i === index ? !dot : dot)),
            }
          : h
      )
    );
  };

  return (
    <div className="bg-sky-50 min-h-screen">
      <Header />
      <HabitForm onAddHabit={handleAddHabit} />

      {/* Two-column on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-10">
        <div>
          <HabitList habits={habits} onToggleDot={handleToggleDot} />
        </div>
        <div>
          <Progress habits={habits}/>
        </div>
      </div>
    </div>
  );
} 