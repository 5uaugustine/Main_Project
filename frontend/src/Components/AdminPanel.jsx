import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [breadcrumbHistory, setBreadcrumbHistory] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [roleCounts, setRoleCounts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/adminpanel/stats");
  
        console.log("Raw Response:", response);
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log("Fetched Data:", data);
  
        setTotalUsers(data.totalUsers);
        setActiveUsers(data.activeUsers);
        setRoleCounts(data.roleCounts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  
    const initialPage = { title: "Admin Panel", href: "/adminpanel" };
    setBreadcrumbHistory([initialPage]);
  }, []);

  const navigateTo = (title, href) => {
    setBreadcrumbHistory((prev) => [...prev, { title, href }]);
    navigate(href); // Correct way to navigate using react-router
  };
  

  const handleLogout = () => {
    alert("You have been logged out.");
    navigate("/"); // Direct user to the home page
  };

  const renderBreadcrumb = () =>
    breadcrumbHistory.map((path, index) => (
      <React.Fragment key={index}>
        <a
          href={path.href}
          onClick={(e) => e.preventDefault()}
          style={{ color: "#388e3c", textDecoration: "none", marginRight: "5px" }}
        >
          {path.title}
        </a>
        {index < breadcrumbHistory.length - 1 && " > "}
      </React.Fragment>
    ));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f4f8",
        margin: "0",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "800px",
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div id="breadcrumb" style={{ marginBottom: "20px", fontSize: "16px" }}>
          {renderBreadcrumb()}
        </div>
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#2e7d32",
            marginBottom: "20px",
          }}
        >
          Admin Panel
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "20px",
            gap: "10px",
          }}
        >
      {[
      "Home",
      "Manage Users",
      "Manage Crops",
      "Manage Fertilizers",
      "Manage Rules",
      "View Messages", // New Button
    ].map((title, idx) => (
      <button
        key={idx}
        onClick={() => {
          let href = "/";
          if (title === "Manage Users") href = "/user-management";
          else if (title === "Manage Crops") href = "/crop-management";
          else if (title === "Manage Fertilizers") href = "/fertilizer-management";
          else if (title === "Manage Rules") href = "/rules-management";
          else if (title === "View Messages") href = "/message"; // New Page for Messages
          else href = `/${title.toLowerCase().replace(/ /g, "-")}`;

          navigateTo(title, href);
        }}
        style={{
          backgroundColor: "#4caf50",
          color: "#ffffff",
          padding: "12px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          textTransform: "capitalize",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#388e3c")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#4caf50")}
      >
        {title}
      </button>
    ))}



          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "#f44336",
              color: "#ffffff",
              padding: "12px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "capitalize",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#d32f2f")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#f44336")}
          >
            Logout
          </button>
        </div>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#2e7d32", marginBottom: "15px" }}>
            User Statistics
          </h2>
          <p style={{ fontSize: "18px", color: "#333333" }}>Total Users: {totalUsers}</p>
          <p style={{ fontSize: "18px", color: "#333333" }}>Active Users (last 30 minutes): {activeUsers}</p>
          <h3 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "15px" }}>User Roles</h3>
          <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
            {Object.entries(roleCounts).map(([role, count]) => (
              <div key={role} style={{
                backgroundColor: "#e0f2f1",
                padding: "10px 20px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                fontSize: "16px",
                fontWeight: "bold",
              }}>
                {role}: {count}
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AdminPanel;
