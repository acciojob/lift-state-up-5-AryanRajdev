
import React, { useState } from "react";
import './../styles/App.css';
import Form from "./form";

const App = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(false);


  return (
    <div>
      <h1>Parent Component</h1>
      {isLoggedIn ? (<p>You are logged in!</p>):(<Form setIsLoggedIn = {setIsLoggedIn} />)}
    </div>
  )
}

export default App
