import React, { useEffect, useState } from "react";
import { fetchPosts, fetchUsers } from "../utils/api";
import Post from "./Post";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchPosts(), fetchUsers()]).then(([postsData, usersData]) => {
      const enrichedPosts = postsData.map((post) => ({
        ...post,
        createdAt: new Date(Date.now() - Math.random() * 1e10),
      }));
      setPosts(enrichedPosts);
      setUsers(usersData);
      setLoading(false);
    });
  }, []);

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 10);
      setLoadingMore(false);
    }, 800);
  };

  return (
    <div className="feed-container">
      {loading ? (
        <>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{ marginBottom: 20 }}>
              <Skeleton
                height={30}
                baseColor="#cbd5e1"
                highlightColor="#e2e8f0"
              />
              <Skeleton
                count={2}
                baseColor="#cbd5e1"
                highlightColor="#e2e8f0"
              />
            </div>
          ))}
        </>
      ) : (
        <>
          {posts.slice(0, visibleCount).map((post) => (
            <Post key={post.id} post={post} users={users} />
          ))}

          {visibleCount < posts.length && (
            <div style={{ textAlign: "center", marginTop: 20 }}>
              {loadingMore ? (
                <Skeleton
                  width={250}
                  height={20}
                  baseColor="#cbd5e1"
                  highlightColor="#e2e8f0"
                />
              ) : (
                <button
                  className="btn btn-comment"
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                >
                  Load More
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Feed;
