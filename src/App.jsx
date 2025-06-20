// import React from "react";
// import Feed from "./components/Feed";
// import "./styles/App.css";

// const App = () => {
//   return (
//     <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
//       <h1 className="title">Social Media Feed</h1>
//       <Feed />
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import Feed from "./components/Feed";
// import "./styles/App.css";
// import logo from "./assets/logo.png"; // adjust the path based on where you store it

// const App = () => {
//   return (
//     <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
//       <div style={{ textAlign: "center", marginBottom: 20 }}>
//         {/* <img
//           src={logo}
//           alt="App Logo"
//           style={{ height: 150, width: 600 }} // or adjust size as you like
//         /> */}
//         <img
//           src={logo}
//           alt="App Logo"
//           style={{ width: "100%", maxWidth: 600, height: "auto" }}
//         />
//       </div>
//       <Feed />
//     </div>
//   );
// };

// export default App;

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
        {/* Heart Icon */}
        <svg
          width={72}
          height={80}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#6366f1"
            d="M50 78.6L45.7 74.8C28.1 58.1 15 45.9 15 32.5C15 23 22.5 15 32.5 15C38.9 15 45 18.5 48 23.6C51 18.5 57.1 15 63.5 15C73.5 15 81 23 81 32.5C81 45.9 67.9 58.1 50.3 74.9L50 75.2L49.7 74.9L50 78.6Z"
          />
        </svg>

        {/* Title Text */}
        <div style={{ lineHeight: 1.2 }}>
          <h1
            style={{
              margin: 0,
              fontSize: "3rem", // 36px
              fontWeight: 500,
              color: "rgb(111 101 229)", // Tailwind gray-900
            }}
          >
            Social Media Feed
          </h1>
        </div>
      </div>

      {/* Feed Component */}
      <Feed />
    </div>
  );
};

export default App;

//Dark-theme

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
