import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CropManagement = () => {
  const [crops, setCrops] = useState([]);
  const [newCropName, setNewCropName] = useState(""); // State to store the new crop name
  const [newCropId, setNewCropId] = useState(""); // State to store the new crop ID (crop_id)
  const navigate = useNavigate();

  // Fetch crops from the backend on component mount
  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await axios.get("http://localhost:3001/crops");
        console.log("Fetched crops data:", response.data);
        setCrops(response.data); // Set the fetched crops data
      } catch (error) {
        console.error("Error fetching crops:", error.response || error);
        alert("Failed to fetch crops. Please try again later.");
      }
    };

    fetchCrops(); // Call the fetch function on component mount
  }, []);

  // Add a new crop to the backend
  const handleAddCrop = async (e) => {
    e.preventDefault();

    if (!newCropName.trim()) {
      alert("Please enter a crop name.");
      return;
    }

    if (!newCropId.trim()) {
      alert("Please enter a crop ID.");
      return;
    }

    // Check if the crop_id already exists
    const isIdExists = crops.some((crop) => crop.crop_id === newCropId);
    if (isIdExists) {
      alert("Crop ID already exists. Please choose a different ID.");
      return;
    }

    const data = { crop_name: newCropName, crop_id: newCropId }; // Include crop_id in the data

    try {
      const response = await axios.post("http://localhost:3001/crops", data);

      if (response.status === 201 && response.data.crop) {
        setCrops((prev) => [...prev, response.data.crop]);
        setNewCropName(""); // Reset the input field after successful addition
        setNewCropId(""); // Reset the ID input field
        alert("Crop added successfully.");
      } else {
        alert("Failed to add crop: Unexpected server response.");
      }
    } catch (error) {
      console.error("Error adding crop:", error.response || error);
      alert("Failed to add crop. Please try again later.");
    }
  };

  // Delete a crop from the backend
  const handleDeleteCrop = async (id) => {
    if (!window.confirm("Are you sure you want to delete this crop?")) return;

    try {
      const response = await axios.delete(`http://localhost:3001/crops/${id}`);

      if (response.status === 200) {
        setCrops((prev) => prev.filter((crop) => crop._id !== id));
        alert("Crop deleted successfully.");
      } else {
        alert("Failed to delete crop: Unexpected server response.");
      }
    } catch (error) {
      console.error("Error deleting crop:", error.response || error);
      alert("Failed to delete crop. Please try again later.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ marginBottom: "20px" }}>Crop Management</h1>

      {/* Navigation buttons */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <button style={buttonStyle} onClick={() => navigate("/adminpanel")}>Admin Panel</button>
        <button style={buttonStyle} onClick={() => navigate("/user-management")}>Manage Users</button>
        <button style={buttonStyle} onClick={() => navigate("/crop-management")}>Manage Crops</button>
        <button style={buttonStyle} onClick={() => navigate("/fertilizer-management")}>Manage Fertilizers</button>
        <button style={buttonStyle} onClick={() => navigate("/rules-management")}>Manage Rules</button>
      </div>

      {/* Add Crop Form */}
      <form style={{ marginBottom: "20px" }} onSubmit={handleAddCrop}>
        <h2>Add Crop</h2>
        <input
          type="text"
          value={newCropId} // Bind input value to the newCropId state
          onChange={(e) => setNewCropId(e.target.value)} // Update newCropId state when input changes
          placeholder="Enter crop ID"
          required
          style={{ padding: "10px", marginRight: "10px", width: "calc(100% - 140px)" }}
        />
        <input
          type="text"
          value={newCropName} // Bind input value to the newCropName state
          onChange={(e) => setNewCropName(e.target.value)} // Update newCropName state when input changes
          placeholder="Enter crop name"
          required
          style={{ padding: "10px", marginRight: "10px", width: "calc(100% - 140px)" }}
        />
        <button style={buttonStyle} type="submit">Add Crop</button>
      </form>

      {/* Crops Table */}
      <h2>Existing Crops</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Crop ID</th>
            <th style={tableHeaderStyle}>Crop Name</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {crops.length > 0 ? (
            crops.map((crop) => (
              <tr key={crop._id}>
                <td style={tableCellStyle}>{crop.crop_id}</td>
                <td style={tableCellStyle}>{crop.crop_name}</td>
                <td style={tableCellStyle}>
                  <button style={deleteButtonStyle} onClick={() => handleDeleteCrop(crop._id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td style={{ ...tableCellStyle, textAlign: "center" }} colSpan="3">No crops available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Styles
const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#4CAF50",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  textTransform: "capitalize",
};

const tableHeaderStyle = {
  backgroundColor: "#f4f4f4",
  padding: "10px",
  border: "1px solid #ddd",
};

const tableCellStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  textAlign: "center",
};

const deleteButtonStyle = {
  padding: "10px 20px",
  backgroundColor: "#FF5733",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default CropManagement;
