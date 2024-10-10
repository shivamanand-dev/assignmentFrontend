import React, { useState } from "react";
import StyledMovieCard from "./StyledProfile";
import fetchWrapper from "../../utils/fetchWrapper";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user);

  const [formData, setFormData] = useState({
    name: user.name,
    phone: user.phone,
    profession: user.profession,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetchWrapper.put(
      `${process.env.REACT_APP_BACKEND_URI}/auth/edit`,
      formData
    );
    alert(res.message);

    localStorage.setItem("user", JSON.stringify(res.user));

    alert("Form submitted successfully!");
  };
  return (
    <StyledMovieCard>
      <div className="form-container">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Profession:</label>
          <select
            name="profession"
            value={formData.profession}
            onChange={handleChange}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="engineer">Engineer</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </StyledMovieCard>
  );
}

export default Profile;
