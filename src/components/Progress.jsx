import { useState, useEffect } from "react";

export default function Progress() {
  // you can add your own meme links here (10 total)
  const memes = [
    "https://i.imgflip.com/fvq8r.jpg",
    "https://i.imgflip.com/d9tyf.jpg",
    "https://i.imgflip.com/bf0z4.jpg",
    "https://i.imgflip.com/6iavea.png",
    "https://i.imgflip.com/1op1lc.jpg",
    "https://i.imgflip.com/lxo47.jpg",
    "https://i.imgflip.com/7klei1.jpg",
    "https://imgflip.com/s/meme/Satisfied-Seal.jpg",
    "https://i.imgflip.com/4stmtd.png",
    "https://imgflip.com/s/meme/Two-Buttons.jpg",
    "https://imgflip.com/s/meme/Bernie-I-Am-Once-Again-Asking-For-Your-Support.jpg",
    "https://imgflip.com/s/meme/Disaster-Girl.jpg"
    
  ];

  const [memeUrl, setMemeUrl] = useState("");

  // random meme on load
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * memes.length);
    setMemeUrl(memes[randomIndex]);
  }, []);

  const totalProgress = 42; // temporary mock value
  const habitCount = 3;

  return (
    <div className="max-w-md mx-auto my-8 p-4 bg-white shadow rounded-lg text-center">
      <h2 className="text-xl font-semibold text-sky-700 mb-3">
        Day Progress
      </h2>

      <p className="text-sky-800 font-medium">
        Total progress: <span className="font-bold">{totalProgress}%</span>
      </p>
      <p className="text-gray-600 mb-4">
        Habits today: <span className="font-bold">{habitCount}</span>
      </p>

      {/* meme block */}
      <div className="mt-4">
        {memeUrl ? (
          <img
            src={memeUrl}
            alt="Daily meme"
            className="w-full rounded-lg max-h-64 object-contain mx-auto"
          />
        ) : (
          <p className="text-gray-400 italic">No meme found</p>
        )}
      </div>
    </div>
  );
}