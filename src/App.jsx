import React from "react";
import Feed from "./components/Feed";
import "./styles/App.css";

const App = () => {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h1 className="bg-red-500 text-white p-4">Social Media Feed</h1>
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
