import React from "react";
import StyledLogin from "./StyledLogin";
import { useState } from "react";
import fetchWrapper from "../../utils/fetchWrapper";
import { useNavigate } from "react-router-dom";

function Login({ isSignUp = false }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    profession: "student",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const isFormValid = () => {
    if (isSignUp) {
      return (
        formData.name &&
        formData.email &&
        formData.password.length >= 6 &&
        formData.phone &&
        formData.profession
      );
    } else {
      return formData.email && formData.password.length >= 6;
    }
  };

  const onClickSubmit = async () => {
    if (isSignUp) {
      const res = await fetchWrapper.post(
        `${process.env.REACT_APP_BACKEND_URI}/auth/register`,
        formData
      );
      alert(res.message);

      localStorage.setItem("user", JSON.stringify(res.user));
      localStorage.setItem("authToken", JSON.stringify(res.authToken));

      if (res.success) {
        navigate("/");
      }
    } else {
      const res = await fetchWrapper.post(
        `${process.env.REACT_APP_BACKEND_URI}/auth/login`,
        formData
      );
      alert(res.message);

      localStorage.setItem("user", JSON.stringify(res.userDetails));
      localStorage.setItem("authToken", JSON.stringify(res.authToken));

      if (res.success) {
        navigate("/");
      }
    }
  };

  return (
    <StyledLogin>
      <div className="formContainer">
        <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
        <div>
          {isSignUp && (
            <div className="gap">
              <label>Name</label>
              <input
                value={formData.name}
                type="text"
                name="name"
                onChange={handleChange}
              />
            </div>
          )}
          <div className="gap">
            <label>Email</label>
            <input
              value={formData.email}
              type="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="gap">
            <label>Password</label>
            <input
              value={formData.password}
              type="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          {isSignUp && (
            <>
              <div className="gap">
                <label>Phone Number</label>
                <input
                  value={formData.phone}
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                />
              </div>
              <div className="gap">
                <label>Profession</label>
                <select
                  name="profession"
                  onChange={handleChange}
                  value={formData.profession}
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="engineer">Engineer</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </>
          )}
          <button disabled={!isFormValid()} onClick={onClickSubmit}>
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </div>
      </div>
    </StyledLogin>
  );
}

export default Login;
