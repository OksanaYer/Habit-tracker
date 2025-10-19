export default function Header() {
  return (
    <header className="bg-sky-500 text-white text-center py-6 shadow-md relative">
      <h1 className="text-3xl font-bold tracking-wide">
        Habit Tracker
      </h1>
      <p className="text-lg mt-1 opacity-90">
        Make your day better ✨
      </p>

      {/* Footer fixed at the bottom */}
      <footer className="absolute bottom-2 left-0 right-0 text-pink-300 text-sm font-semibold">
        You can!
      </footer>
    </header>
  );
}