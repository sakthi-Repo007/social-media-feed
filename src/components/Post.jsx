import React, { useState } from "react";
import LikeButton from "./LikeButton";
import CommentList from "./CommentList";
import AuthorTooltip from "./AuthorTooltip";
import MentionInput from "./MentionInput";
import { timeAgo } from "../utils/timeAgo";
import "../styles/Post.css";

const Post = ({ post, users }) => {
  const [showFull, setShowFull] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const author = users.find((u) => u.id === post.userId);

  return (
    <div className="post-container">
      <div className="post-title">{post.title}</div>
      <div className="post-body">
        {showFull ? post.body : post.body.slice(0, 100)}
        {post.body.length > 100 && (
          <span
            onClick={() => setShowFull(!showFull)}
            style={{
              fontSize: 13,
              color: "#6366f1", // indigo
              cursor: "pointer",
              textDecoration: "underline",
              marginLeft: 8,
            }}
            onMouseOver={(e) => (e.target.style.color = "#4f46e5")}
            onMouseOut={(e) => (e.target.style.color = "#6366f1")}
          >
            {showFull ? "Show less" : "Show more"}
          </span>
        )}
      </div>

      <div>
        <AuthorTooltip author={author} position="bottom">
          <span className="post-author">{author?.name}</span>
        </AuthorTooltip>
        <span className="post-meta">• {timeAgo(post.createdAt)}</span>
      </div>

      <div className="post-actions">
        <LikeButton />
        <button
          className="btn btn-comment"
          onClick={() => setShowComments(!showComments)}
        >
          {showComments ? "Hide Comments" : "Show Comments"}
        </button>
      </div>

      {showComments && (
        <>
          <CommentList postId={post.id} />
          <MentionInput users={users.filter((u) => u.id !== post.userId)} />
        </>
      )}
    </div>
  );
};

export default Post;
