import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const FertilizerManagement = () => {
  const [fertilizers, setFertilizers] = useState([]);
  const [fertilizerName, setFertilizerName] = useState("");
  const [fertilizerId, setFertilizerId] = useState(""); // New state for fertilizer_id
  const [fertilizerType, setFertilizerType] = useState("organic");
  const [description, setDescription] = useState("");
  const [applicationMethod, setApplicationMethod] = useState(""); // New state for application method
  const [amountPerPlant, setAmountPerPlant] = useState(""); // New state for amount per plant
  const [loading, setLoading] = useState(false); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors
  const [deleteLoading, setDeleteLoading] = useState(null); // For handling individual delete loading

  // Fetch fertilizers from the database when component mounts
  useEffect(() => {
    const fetchFertilizers = async () => {
      try {
        setLoading(true); // Show loading indicator
        const fertilizerResponse = await axios.get("http://localhost:3001/fertilizers");
        setFertilizers(fertilizerResponse.data);
      } catch (error) {
        console.error("Error fetching fertilizers:", error);
        setError("Failed to fetch fertilizers.");
      } finally {
        setLoading(false); // Hide loading indicator
      }
    };
    fetchFertilizers();
  }, []);

  // Handle form submission for adding a fertilizer
  const handleAddFertilizer = async (e) => {
    e.preventDefault();

    // Check if fertilizerId already exists in the current list of fertilizers
    const isIdExists = fertilizers.some((fertilizer) => fertilizer.fertilizer_id === fertilizerId);
    if (isIdExists) {
      alert("Fertilizer ID already exists. Please choose a different ID.");
      return; // Stop the form submission if the ID exists
    }

    // Check if all required fields are filled
    if (!fertilizerName || !fertilizerId || !description || !applicationMethod || !amountPerPlant) {
      alert("Please fill in all fields.");
      return;
    }

    const newFertilizer = {
      fertilizer_name: fertilizerName,
      fertilizer_id: fertilizerId,
      fertilizer_type: fertilizerType,
      description,
      application_method: applicationMethod, // Include application method
      amount_per_plant: amountPerPlant, // Include amount per plant
    };

    try {
      setLoading(true); // Show loading indicator for adding fertilizer
      const response = await axios.post("http://localhost:3001/fertilizers", newFertilizer);
      setFertilizers([...fertilizers, response.data.fertilizer]); // Add the new fertilizer to state
      setFertilizerName("");
      setFertilizerId(""); // Clear fertilizer_id after adding
      setDescription("");
      setApplicationMethod(""); // Clear application method after adding
      setAmountPerPlant(""); // Clear amount per plant after adding
      alert("Fertilizer added successfully!");
    } catch (error) {
      console.error("Error adding fertilizer:", error.response ? error.response.data : error.message);
      setError("Failed to add fertilizer. Please try again.");
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  // Handle delete fertilizer
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this fertilizer?")) return;

    try {
      setDeleteLoading(id); // Set delete loading for the specific fertilizer
      await axios.delete(`http://localhost:3001/fertilizers/${id}`);
      setFertilizers(fertilizers.filter((fertilizer) => fertilizer._id !== id)); // Remove deleted fertilizer from state
      alert("Fertilizer deleted successfully!");
    } catch (error) {
      console.error("Error deleting fertilizer:", error);
      alert("Failed to delete fertilizer. Please try again.");
    } finally {
      setDeleteLoading(null); // Reset delete loading
    }
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", margin: "20px", backgroundColor: "#f0f4f8" }}>
      {/* Navigation Bar */}
      <nav style={{ display: "flex", justifyContent: "center", backgroundColor: "#4CAF50", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", padding: "10px 0", borderRadius: "5px" }}>
        <ul style={{ listStyle: "none", display: "flex", gap: "30px", margin: "0", padding: "0" }}>
          <li><Link to="/adminpanel" style={{ textDecoration: "none", color: "#fff", fontSize: "18px", fontWeight: "500", transition: "color 0.3s ease" }}>Home</Link></li>
          <li><Link to="/fertilizer-management" style={{ textDecoration: "none", color: "#fff", fontSize: "18px", fontWeight: "500", transition: "color 0.3s ease" }}>Fertilizer Management</Link></li>
          <li><Link to="/user-management" style={{ textDecoration: "none", color: "#fff", fontSize: "18px", fontWeight: "500", transition: "color 0.3s ease" }}>User Management</Link></li>
        </ul>
      </nav>

      <div style={{ color: "#555", fontSize: "14px", marginBottom: "10px", textAlign: "center" }}>
        Home &gt; Fertilizer Management
      </div>
      <h1 style={{ color: "#4CAF50", fontSize: "32px", marginBottom: "20px", textAlign: "center" }}>Fertilizer Management</h1>

      {/* Display Error Message */}
      {error && <div style={{ color: "red", marginBottom: "10px", textAlign: "center" }}>{error}</div>}

      {/* Add Fertilizer Form */}
      <form onSubmit={handleAddFertilizer} style={{ marginBottom: "30px", padding: "20px", border: "1px solid #ddd", borderRadius: "5px", backgroundColor: "#f9f9f9" }}>
        <h2 style={{ marginBottom: "15px", color: "#4CAF50", textAlign: "center" }}>Add Fertilizer</h2>
        <label style={{ display: "block", marginBottom: "10px" }}>Fertilizer ID:</label>
        <input
          type="text"
          value={fertilizerId}
          onChange={(e) => setFertilizerId(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        <label style={{ display: "block", marginBottom: "10px" }}>Fertilizer Name:</label>
        <input
          type="text"
          value={fertilizerName}
          onChange={(e) => setFertilizerName(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        <label style={{ display: "block", marginBottom: "10px" }}>Fertilizer Type:</label>
        <select
          value={fertilizerType}
          onChange={(e) => setFertilizerType(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "5px" }}
        >
          <option value="organic">Organic</option>
          <option value="inorganic">Inorganic</option>
        </select>

        <label style={{ display: "block", marginBottom: "10px" }}>Description:</label>
        <textarea
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "5px" }}
        ></textarea>

        <label style={{ display: "block", marginBottom: "10px" }}>Application Method:</label>
        <input
          type="text"
          value={applicationMethod}
          onChange={(e) => setApplicationMethod(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "5px" }}
        />

        <label style={{ display: "block", marginBottom: "10px" }}>Amount per Plant:</label>
        <input
          type="number"
          value={amountPerPlant}
          onChange={(e) => setAmountPerPlant(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        
        <button type="submit" style={{ backgroundColor: "#4CAF50", color: "#fff", padding: "10px 15px", border: "none", borderRadius: "5px", cursor: "pointer" }} disabled={loading}>
          {loading ? "Adding..." : "Add Fertilizer"}
        </button>
      </form>

      {/* Existing Fertilizers Table */}
      <h2 style={{ marginBottom: "20px", color: "#4CAF50", textAlign: "center" }}>Existing Fertilizers</h2>
      {loading ? (
        <div style={{ textAlign: "center" }}>Loading fertilizers...</div>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}>
          <thead>
            <tr>
              <th style={{ padding: "10px", border: "1px solid #ddd", backgroundColor: "#4CAF50", color: "#fff" }}>Fertilizer ID</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", backgroundColor: "#4CAF50", color: "#fff" }}>Name</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", backgroundColor: "#4CAF50", color: "#fff" }}>Type</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", backgroundColor: "#4CAF50", color: "#fff" }}>Description</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", backgroundColor: "#4CAF50", color: "#fff" }}>Application Method</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", backgroundColor: "#4CAF50", color: "#fff" }}>Amount per Plant</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", backgroundColor: "#4CAF50", color: "#fff" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fertilizers.map((fertilizer) => (
              <tr key={fertilizer._id}>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{fertilizer.fertilizer_id}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{fertilizer.fertilizer_name}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{fertilizer.fertilizer_type}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{fertilizer.description}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{fertilizer.application_method}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{fertilizer.amount_per_plant}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <button
                    onClick={() => handleDelete(fertilizer._id)}
                    style={{
                      backgroundColor: "#e74c3c",
                      color: "#fff",
                      padding: "5px 10px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontSize: "14px",
                      transition: "background-color 0.3s ease",
                    }}
                    disabled={deleteLoading === fertilizer._id}
                  >
                    {deleteLoading === fertilizer._id ? "Deleting..." : "Delete"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FertilizerManagement;
