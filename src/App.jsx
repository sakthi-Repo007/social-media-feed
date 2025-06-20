import React from "react";
import Feed from "./components/Feed";
import "./styles/App.css";

const App = () => {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      {/* Header Icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          marginBottom: 20,
          marginRight: 24,
        }}
      >
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "100%",
            maxWidth: "72px",
            height: "auto",
          }}
        >
          <path
            fill="#6366f1"
            d="M50 78.6L45.7 74.8C28.1 58.1 15 45.9 15 32.5C15 23 22.5 15 32.5 15C38.9 15 45 18.5 48 23.6C51 18.5 57.1 15 63.5 15C73.5 15 81 23 81 32.5C81 45.9 67.9 58.1 50.3 74.9L50 75.2L49.7 74.9L50 78.6Z"
          />
        </svg>
        <h1 className="responsive-title">Social Media Feed</h1>
      </div>

      {/* Feed Component */}
      <Feed />
    </div>
  );
};

export default App;

//Dark-theme-Will implement in future

// const App = () => {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark-theme" : "light");
//   };

//   return (
//     <div className={theme}>
//       <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <h1>Social Media Feed</h1>
//           <button onClick={toggleTheme}>
//             {theme === "light" ? "🌙 Dark" : "☀️ Light"}
//           </button>
//         </div>
//         <Feed />
//       </div>
//     </div>
//   );
// };
