import React, { useState, useEffect } from "react";
import axios from "axios";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token")); // Assuming JWT is stored in localStorage

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (!token) {
          alert("Please log in first.");
          return;
        }
        const response = await axios.get("http://localhost:3001/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        alert("Failed to fetch users. Please check your API and server.");
      }
    };

    if (token) {
      fetchUsers();
    }
  }, [token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUser = async (e) => {
    e.preventDefault();

    // Check if token is available
    if (!token) {
      alert("Please login first.");
      return;
    }

    // Validate form fields
    if (!formData.username || !formData.email || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3001/register",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUsers((prev) => [...prev, response.data.user]);
      setFormData({ username: "", email: "", password: "", role: "user" });
      alert("User added successfully!");
    } catch (error) {
      console.error("Error adding user:", error);
      alert(error.response?.data?.message || "An error occurred while adding the user.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    setLoading(true);
    try {
      await axios.delete(`http://localhost:3001/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers((prev) => prev.filter((user) => user._id !== id));
      alert("User deleted successfully.");
    } catch (error) {
      console.error("Error deleting user:", error);
      alert(error.response?.data?.message || "Failed to delete user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <nav style={{ marginBottom: "20px" }}>
        <a
          href="/adminpanel"
          style={{ textDecoration: "none", color: "#4CAF50", marginRight: "15px" }}
        >
          Home
        </a>
        <a
          href="#add-user"
          style={{ textDecoration: "none", color: "#4CAF50", marginRight: "15px" }}
        >
          Add User
        </a>
        <a
          href="#existing-users"
          style={{ textDecoration: "none", color: "#4CAF50", marginRight: "15px" }}
        >
          Existing Users
        </a>
        <a href="/logout" style={{ textDecoration: "none", color: "#4CAF50" }}>
          Logout
        </a>
      </nav>

      <h1 style={{ color: "#4CAF50", marginBottom: "20px" }}>User Management</h1>

      <form
        onSubmit={handleAddUser}
        style={{
          marginBottom: "30px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          backgroundColor: "#f9f9f9",
        }}
        id="add-user"
      >
        <h2 style={{ marginBottom: "15px", color: "#4CAF50" }}>Add User</h2>
        <label style={{ display: "block", marginBottom: "10px" }}>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <label style={{ display: "block", marginBottom: "10px" }}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <label style={{ display: "block", marginBottom: "10px" }}>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <label style={{ display: "block", marginBottom: "10px" }}>Role:</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          {loading ? "Adding..." : "Add User"}
        </button>
      </form>

      <div id="existing-users">
        <h2 style={{ marginBottom: "20px", color: "#4CAF50" }}>Existing Users</h2>
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ padding: "10px", textAlign: "left", borderBottom: "1px solid #ddd" }}>Username</th>
                <th style={{ padding: "10px", textAlign: "left", borderBottom: "1px solid #ddd" }}>Email</th>
                <th style={{ padding: "10px", textAlign: "left", borderBottom: "1px solid #ddd" }}>Role</th>
                <th style={{ padding: "10px", textAlign: "left", borderBottom: "1px solid #ddd" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{user.username}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{user.email}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{user.role}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      style={{
                        backgroundColor: "#f44336",
                        color: "white",
                        padding: "5px 10px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
