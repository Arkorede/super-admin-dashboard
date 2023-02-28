import React, { useState } from "react";
import credbevyLogo from "./credbevyLogo.png";
import "./login.css";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleValidate = (e) => {
    e.preventDefault();
    if (user === "reactjs12@gmail.com" && pass === "love") {
      alert("Succesful login, welcome");
    } else if (user === 123456 && pass === "love") {
      alert("Succesful login, welcome");
    } else {
      alert("Wrong Credentials, please try again");
    }
  };

  return (
    <div className="login">
      <div className="container mx-auto p-6 mt-6">
        <img src={credbevyLogo} alt="credbevy logo" />
      </div>
      <div className="top"></div>
      <div className="container mx-auto flex flex-col justify-center items-center gap-3">
        <div className="text-2xl font-bold leading-6 tracking-[-0.5px] text-center">
          Login
        </div>
        <form onSubmit={handleValidate} className="login-form mt-3">
          <div>
            <input
              type="email"
              value={user}
              className="form-input p-3"
              placeholder="Email/Phone number"
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className="mt-3.5">
            <input
              type="password"
              value={pass}
              placeholder="Password"
              className="form-input p-3"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center mt-10">
            <div
              className="login-button flex justify-center items-center"
              type="submit"
            >
              <p>Login</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
