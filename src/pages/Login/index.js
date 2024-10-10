import React from "react";
import StyledLogin from "./StyledLogin";

function Login({ isSignUp = false }) {
  return (
    <StyledLogin>
      <div className="formContainer">
        <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
        <div>
          {isSignUp && (
            <div className="gap">
              <label>Name</label>
              <input type="text" name="name" />
            </div>
          )}
          <div className="gap">
            <label>Email</label>
            <input type="email" name="email" />
          </div>
          <div className="gap">
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          {isSignUp && (
            <>
              {" "}
              <div className="gap">
                <label>Phone Number</label>
                <input type="tel" name="phone" />
              </div>
              <div className="gap">
                <label>Profession</label>
                <select name="profession">
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="engineer">Engineer</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </>
          )}
          <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
        </div>
      </div>
    </StyledLogin>
  );
}

export default Login;
