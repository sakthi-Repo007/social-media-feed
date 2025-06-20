import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../styles/CommentList.css";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        const data = await res.json();
        setComments(data);
      } catch (err) {
        console.error("Error fetching comments", err);
      }
      setLoading(false);
    };

    fetchComments();
  }, [postId]);

  return (
    <div className="comment-list">
      {loading ? (
        <div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="comment-skeleton">
              <Skeleton
                width="40%"
                height={10}
                className="comment-skeleton-line"
              />
              <Skeleton width="80%" height={10} />
            </div>
          ))}
        </div>
      ) : (
        comments.map((c) => (
          <div key={c.id} className="comment-item">
            <span className="comment-name">{c.name}</span>
            <span className="comment-body">: {c.body}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentList;
