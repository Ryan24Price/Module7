import { useState } from "react";
import { useMoodContext } from "../Context/MoodContext";


function Emoji() {

  const{ mood, handleMoodChange} = useMoodContext();
  console.log(mood);

  
  return (
    <div className="emoji-container">
        <div className="emoji">
      Current Mood: {mood}
      <button onClick={handleMoodChange}>Click and change me!</button>
      </div>
    </div>
  );
}

export default Emoji;