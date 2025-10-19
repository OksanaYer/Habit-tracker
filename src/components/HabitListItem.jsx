export default function HabitListItem({ name, done, goal }) {
  const progress = Math.round((done / goal) * 100);

  // create small circles to visualize progress
  const circles = Array.from({ length: goal }, (_, i) => (
    <span
      key={i}
      className={`inline-block w-3 h-3 rounded-full mr-1 ${
        i < done ? "bg-sky-500" : "bg-sky-100"
      }`}
    ></span>
  ));

  return (
    <div className="bg-white border border-sky-100 shadow-sm rounded-lg p-4 flex justify-between items-center hover:shadow-md transition">
      <div>
        <h3 className="text-lg font-medium text-sky-800">{name}</h3>
        <div>{circles}</div>
      </div>

      <div className="text-right">
        <span className="text-sky-600 font-bold">{progress}%</span>
      </div>
    </div>
  );
}