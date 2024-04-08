import { useState } from 'react';
import './App.css'

const scrapUsers = () => {
  const usersNodes = document.querySelectorAll("div[data-testid='UserCell']");
}

function App() {
  const [followers, setFollowers] = useState([]);
  const [unfollowers, setUnfollowers] = useState([]);

  const fetchFollowers = () => {
    setFollowers(['follower1', 'follower2', 'follower3']);
    setUnfollowers([]);
  }

  return (
    <>
      <h1 className="text-left font-bold text-xl">How to use:</h1>
      <ol className="list-decimal text-left">
        <li>Go to your followers page on X</li>
        <li>Scroll to the bottom</li>
        <li>Click button to fetch followers</li>
      </ol>
      <div className="flex flex-col gap-2 my-5">
        <button className="bg-black text-white" onClick={fetchFollowers}>
          Check followers
        </button>
        <span className="font-bold">Followers: {followers.length}</span>
      </div>
      <div className="flex flex-col items-start">
        <h3>Unfollowers:</h3>
        {unfollowers.length === 0 && (
          <span className="text-slate-600 text-left italic ml-2">List empty:)</span>
        )}
      </div>
      <div className="w-full h-0.5 bg-black mt-10"></div>
      <span>
        Made with 🖤 by <a href="https://twitter.com/Zlvskyy">@zlvskyy</a>
      </span>
    </>
  );
}

export default App
