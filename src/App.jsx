import React, { useState } from "react";
import SignIn from "./components/SignIn.jsx";
import AddUser from "./components/AddUser.jsx";
import "./App.css"; // Ensure the CSS file is imported

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app-container">
      {!isLoggedIn ? (
        <SignIn onLogin={setIsLoggedIn} /> // Passing the setIsLoggedIn function to SignIn
      ) : (
        <AddUser /> // Show AddUser after login
      )}
    </div>
  );
}

export default App;
