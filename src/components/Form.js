import React from "react";

const Form = ({ setIsLoggedIn }) => {

    function handleSubmit(e){
       e.preventDefault;
       setIsLoggedIn(true);
    }


  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label style={{ display: "block" }}>Username:</label>
        <input type="text" style={{ display: "block" }} />
        <label style={{ display: "block" }}>Password:</label>
        <input type="password" style={{ display: "block" }} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Form;
