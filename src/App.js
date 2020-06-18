import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [message, setMessage] = useState("Click to Login.");

  // example token
  const userJwt = "Koafin23412ijf#$3qnlrk2nr";

  const handleJwt = userToken => {
    window.localStorage.setItem("usersToken", userToken);
    setMessage("You are Logged In!");
  };

  const clearJwt = () => {
    window.localStorage.removeItem("usersToken");
    setMessage("Click to Login.");
  };

  return (
    <div className="App">
      <h1>Hello, {message}</h1>

      {/* Comments: ternary operator (?), conditional expression.
      ex. loggedIn ? 'Yes'(if loggedIn value is true return this) : 'No'(if LoggedIn value is false return this);

      The double bang or 2 exclamtion points (!!) will turn your value into a boolean 
      that you can use in your conditional expression
      */}

      {!!window.localStorage.getItem("usersToken") ? (
        <button onClick={() => clearJwt("")}>Logout</button>
      ) : (
        <button onClick={() => handleJwt(userJwt)}>Login</button>
      )}
    </div>
  );
}
