// import React, { useEffect, useState } from "react";
// import { fetchPosts, fetchUsers } from "../utils/api";
// import Post from "./Post";

// const Feed = () => {
//   const [posts, setPosts] = useState([]);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     Promise.all([fetchPosts(), fetchUsers()]).then(([postsData, usersData]) => {
//       const enrichedPosts = postsData.map((post) => ({
//         ...post,
//         createdAt: new Date(Date.now() - Math.random() * 1e10),
//       }));
//       setPosts(enrichedPosts);
//       setUsers(usersData);
//     });
//   }, []);

//   return (
//     <div>
//       {posts.map((post) => (
//         <Post key={post.id} post={post} users={users} />
//       ))}
//     </div>
//   );
// };

// export default Feed;

import React, { useEffect, useState } from "react";
import { fetchPosts, fetchUsers } from "../utils/api";
import Post from "./Post";
import Skeleton from "react-loading-skeleton";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    Promise.all([fetchPosts(), fetchUsers()]).then(([postsData, usersData]) => {
      const enrichedPosts = postsData.map((post) => ({
        ...post,
        createdAt: new Date(Date.now() - Math.random() * 1e10),
      }));
      setPosts(enrichedPosts);
      setUsers(usersData);
    });
  }, []);

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 10);
      setLoadingMore(false);
    }, 800); // simulate network delay
  };

  return (
    <div className="feed-container">
      {posts.slice(0, visibleCount).map((post) => (
        <Post key={post.id} post={post} users={users} />
      ))}

      {visibleCount < posts.length && (
        <div style={{ textAlign: "center", marginTop: 20 }}>
          {loadingMore ? (
            <>
              <div
                style={{
                  marginTop: "20px",
                }}
              >
                <Skeleton
                  width={250}
                  height={20}
                  baseColor="#cbd5e1" // darker
                  highlightColor="#e2e8f0"
                />
              </div>
            </>
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
    </div>
  );
};

export default Feed;
