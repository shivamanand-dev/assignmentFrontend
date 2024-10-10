import { useEffect, useState } from "react";
import StyledAllUser from "./StyledAllUser";
import fetchWrapper from "../../utils/fetchWrapper";
import Loading from "../../components/Loading";

function AllUser() {
  const [users, setUsers] = useState([]);

  const [editingUser, setEditingUser] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
  });

  const fetchUsers = async () => {
    setisLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URI}/auth/users`
      );
      const data = await response.json();
      setUsers(data.users);

      setisLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);

      setisLoading(false);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user._id);
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      profession: user.profession,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    const res = await fetchWrapper.put(
      `${process.env.REACT_APP_BACKEND_URI}/auth/editByEmail`,
      formData
    );
    alert(res.message);
    setEditingUser(null);

    await fetchUsers();

    setFormData({
      name: "",
      email: "",
      phone: "",
      profession: "",
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <StyledAllUser className="wrapper">
          <h1>All Users</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Profession</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.profession}</td>
                  <td>
                    <button onClick={() => handleEdit(user)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {editingUser && (
            <div className="form-container">
              <h2>Edit User</h2>
              <div className="form-group">
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled
                  />
                </label>
                <label>
                  Phone:
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Profession:
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
                </label>
                <button type="button" onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          )}
        </StyledAllUser>
      )}
    </>
  );
}

export default AllUser;
