import React, { useState } from "react";
import "../styles/Buttons.css";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      className={`btn btn-like ${liked ? "liked" : ""}`}
      onClick={() => setLiked(!liked)}
    >
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
};

export default LikeButton;
