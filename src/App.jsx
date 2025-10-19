import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import Progress from "./components/Progress";

function App() {
  return (
    <div className="bg-sky-50 min-h-screen">
      <Header />
      <HabitForm />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-10">
        <div>
          <HabitList />
        </div>
        <div>
          <Progress />
        </div>
      </div>
    </div>
  );
}

export default App;