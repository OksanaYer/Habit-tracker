export default function Progress({ habits }) {
  if (!Array.isArray(habits)) {
    habits = [];
  }

  let totalProgress = 0;
  let habitCount = habits.length;

  if (habitCount > 0) {
    let completedDots = 0;
    let totalDots = 0;

    habits.forEach((h) => {
      if (Array.isArray(h.doneArray)) {
        completedDots += h.doneArray.filter(Boolean).length;
        totalDots += h.goal || 0;
      }
    });

    totalProgress =
      totalDots > 0 ? Math.round((completedDots / totalDots) * 100) : 0;
  }

  const memes = [
    "https://i.imgflip.com/fvq8r.jpg",
    "https://i.imgflip.com/d9tyf.jpg",
    "https://i.imgflip.com/bf0z4.jpg",
    "https://i.imgflip.com/6iavea.png",
    "https://i.imgflip.com/1op1lc.jpg",
    "https://i.imgflip.com/7klei1.jpg",
    "https://imgflip.com/s/meme/Satisfied-Seal.jpg",
    "https://i.imgflip.com/4stmtd.png",
    "https://imgflip.com/s/meme/Two-Buttons.jpg",
    "https://imgflip.com/s/meme/Bernie-I-Am-Once-Again-Asking-For-Your-Support.jpg",
    "https://imgflip.com/s/meme/Disaster-Girl.jpg",
    "https://i.imgflip.com/9dp4nk.jpg",
    "https://i.imgflip.com/2ktb88.jpg"
    
  ];
  const finalMeme = "https://i.imgflip.com/lxo47.jpg";
  let memeUrl;
    if (totalProgress === 100) {
    memeUrl = finalMeme;
    } else {
    const memeIndex = Math.min(
        Math.floor(totalProgress / 5),
        memes.length - 1
   );
   memeUrl = memes[memeIndex];
 }

  return (
    <div className="max-w-md mx-auto mt-25 mb-8 p-4 bg-white shadow rounded-lg text-center">
      <h2 className="text-xl font-semibold text-sky-700 mb-3">Day Progress</h2>

      {habitCount === 0 ? (
        <p className="text-gray-400 italic">Add some habits to start tracking!</p>
      ) : (
        <>
          <p className="text-sky-800 font-medium">
            Total progress: <span className="font-bold">{totalProgress}%</span>
          </p>
          <p className="text-gray-600 mb-4">
            Habits today: <span className="font-bold">{habitCount}</span>
          </p>

          <div className="w-full bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
            <div
              className="bg-sky-500 h-3 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${totalProgress}%` }}
            ></div>
          </div>

          {/* Meme image */}
          <div className="mt-4">
            <img
              src={memeUrl}
              alt="Motivational meme"
              className="rounded-lg mx-auto w-full max-w-xs"
            />
          </div>
        </>
      )}
    </div>
  );
}