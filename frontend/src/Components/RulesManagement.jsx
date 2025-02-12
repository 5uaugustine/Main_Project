import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RulesManagement = () => {
  const [ruleId, setRuleId] = useState("");
  const [rules, setRules] = useState([]);
  const [cropId, setCropId] = useState("");
  const [seasonId, setSeasonId] = useState("");
  const [climateId, setClimateId] = useState("");
  const [soilTypeId, setSoilTypeId] = useState("");
  const [fertilizerType, setFertilizerType] = useState("Inorganic");
  const [fertilizerName, setFertilizerName] = useState("");
  const [growthStage, setGrowthStage] = useState("");
  const [amountPerPlant, setAmountPerPlant] = useState(20);
  const [fertilizers, setFertilizers] = useState([]);
  const [growthStages, setGrowthStages] = useState([]);
  const [soilTypes, setSoilTypes] = useState([]);
  const [loadingFertilizers, setLoadingFertilizers] = useState(true);
  const [loadingGrowthStages, setLoadingGrowthStages] = useState(true);
  const [loadingSoilTypes, setLoadingSoilTypes] = useState(true);
  const [crops, setCrops] = useState([]);
  const [loadingCrops, setLoadingCrops] = useState(true); // Add loading state
  const [seasons, setSeasons] = useState([]);
const [loadingSeasons, setLoadingSeasons] = useState(true);
const [climates, setClimates] = useState([]); // Stores fetched climate data
const [loadingClimates, setLoadingClimates] = useState(true); // Tracks loading state

  
  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await axios.get("http://localhost:3001/crops");
        setCrops(response.data);  // Fix: Set the fetched crops data
      } catch (error) {
        console.error("Error fetching crops:", error);
      } finally {
        setLoadingCrops(false);
      }
    };
  
    fetchCrops();
    const fetchClimates = async () => {
      try {
        const response = await axios.get("http://localhost:3001/climate"); // Correct endpoint
        console.log("Fetched Climates:", response.data); // Log response
        setClimates(response.data);
      } catch (error) {
        console.error("Error fetching climates:", error);
      } finally {
        setLoadingClimates(false);
      }
    };
  
    fetchClimates();
    const fetchSeasons = async () => {
      try {
        const response = await axios.get("http://localhost:3001/seasons");
        setSeasons(response.data);
      } catch (error) {
        console.error("Error fetching seasons:", error);
      } finally {
        setLoadingSeasons(false);
      }
    };
  
    fetchSeasons();
  
    const fetchFertilizers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/fertilizers");
        setFertilizers(response.data);
      } catch (error) {
        console.error("Error fetching fertilizers:", error);
      } finally {
        setLoadingFertilizers(false);
      }
    };

    const fetchGrowthStages = async () => {
      try {
        const response = await axios.get("http://localhost:3001/growthstages");
        setGrowthStages(response.data);
      } catch (error) {
        console.error("Error fetching growth stages:", error);
      } finally {
        setLoadingGrowthStages(false);
      }
    };

    const fetchSoilTypes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/soiltypes");
        setSoilTypes(response.data);
      } catch (error) {
        console.error("Error fetching soil types:", error);
      } finally {
        setLoadingSoilTypes(false);
      }
    };

    const fetchRules = async () => {
      try {
        const response = await axios.get("http://localhost:3001/rules");
        setRules(response.data);
      } catch (error) {
        console.error("Error fetching rules:", error);
      }
    };

    fetchFertilizers();
    fetchGrowthStages();
    fetchSoilTypes();
    fetchRules();
  }, []);
  const handleAddRule = async (e) => {
    e.preventDefault();
  
    if (!ruleId || !cropId || !seasonId || !climateId || !soilTypeId || !fertilizerName || !growthStage || !amountPerPlant) {
        alert("Please fill in all fields.");
        return;
    }

    const newRule = {
      rule_id: ruleId,
        crop_id: cropId,
        season_id: seasonId,
        climate_id: climateId,
        soil_type_id: soilTypeId,
        fertilizer_type: fertilizerType,
        fertilizer_name: fertilizerName,
        growth_stage: growthStage,
        amount_per_plant: amountPerPlant,
    };

    console.log("Sending data:", newRule); // Debugging line

    try {
        const response = await axios.post("http://localhost:3001/rules", newRule);
        console.log("Response:", response.data); // Debugging line
        setRules((prevRules) => [...prevRules, response.data]);
        alert("Rule added successfully!");
    } catch (error) {
        console.error("Error adding rule:", error);
        alert("Failed to add rule. Please try again.");
    }
};

  const handleDeleteRule = async (ruleId) => {
    if (!window.confirm("Are you sure you want to delete this rule?")) return;

    try {
      await axios.delete(`http://localhost:3001/rules/${ruleId}`);
      setRules(rules.filter((rule) => rule.rule_id !== ruleId));
      alert("Rule deleted successfully!");
    } catch (error) {
      console.error("Error deleting rule:", error);
      alert("Failed to delete rule. Please try again.");
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <nav style={{ marginBottom: "20px" }}>
        <ul style={{ display: "flex", listStyle: "none", padding: "0" }}>
          <li style={{ marginRight: "15px" }}>
            <Link to="/adminpanel" style={{ textDecoration: "none", color: "#4CAF50" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/rules-management" style={{ textDecoration: "none", color: "#4CAF50" }}>
              Rules Management
            </Link>
          </li>
        </ul>
      </nav>

      <div style={{ marginBottom: "20px", fontSize: "14px", color: "#555" }}>
        Home &gt; Rules Management
      </div>
      <h1 style={{ color: "#4CAF50", marginBottom: "20px" }}>Rules Management</h1>
      <form
  onSubmit={handleAddRule}
  style={{
    marginBottom: "30px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  }}
>
  <label style={{ display: "block", marginBottom: "10px" }}>Rule ID</label>
  <input
    type="number"
    value={ruleId}  // Fix: Corrected value to ruleId
    onChange={(e) => setRuleId(e.target.value)}
    required
    style={{
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    }}
  />

  <label style={{ display: "block", marginBottom: "10px" }}>Crop:</label>
  {loadingCrops ? (
    <p>Loading crops...</p>
  ) : (
    <select
      value={cropId}
      onChange={(e) => setCropId(e.target.value)}
      required
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "15px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <option value="">Select Crop</option>
      {crops.map((crop) => (
        <option key={crop._id} value={crop.crop_id}>
          {crop.crop_id} - {crop.crop_name}
        </option>
      ))}
    </select>
  )}

  <label style={{ display: "block", marginBottom: "10px" }}>Season:</label>
  {loadingSeasons ? (
    <p>Loading seasons...</p>
  ) : (
    <select
      value={seasonId}
      onChange={(e) => setSeasonId(e.target.value)}
      required
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "15px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <option value="">Select Season</option>
      {seasons.map((season) => (
        <option key={season._id} value={season.season_id}>
          {season.season_id} - {season.season_name}
        </option>
      ))}
    </select>
  )}

  <label style={{ display: "block", marginBottom: "10px" }}>Climate:</label>
  {loadingClimates ? (
    <p>Loading climates...</p>
  ) : (
    <select
      value={climateId}
      onChange={(e) => setClimateId(e.target.value)}
      required
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "15px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <option value="">Select Climate</option>
      {climates.map((climate) => (
        <option key={climate._id} value={climate.climate_id}>
          {climate.climate_id} - {climate.climate_name}
        </option>
      ))}
    </select>
  )}

  <label style={{ display: "block", marginBottom: "10px" }}>Soil Type:</label>
  {loadingSoilTypes ? (
    <p>Loading soil types...</p>
  ) : (
    <select
      value={soilTypeId}
      onChange={(e) => setSoilTypeId(e.target.value)}
      required
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "15px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <option value="">Select Soil Type</option>
      {soilTypes.map((soil) => (
        <option key={soil._id} value={soil.soil_type_id}>
          {soil.soil_type_name}
        </option>
      ))}
    </select>
  )}

  <label style={{ display: "block", marginBottom: "10px" }}>Fertilizer Type:</label>
  <select
    value={fertilizerType}
    onChange={(e) => setFertilizerType(e.target.value)}
    required
    style={{
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    }}
  >
    <option value="Inorganic">Inorganic</option>
    <option value="Organic">Organic</option>
  </select>

  <label style={{ display: "block", marginBottom: "10px" }}>Fertilizer Name:</label>
  {loadingFertilizers ? (
    <p>Loading fertilizers...</p>
  ) : (
    <select
      value={fertilizerName}
      onChange={(e) => setFertilizerName(e.target.value)}
      required
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "15px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <option value="">Select Fertilizer</option>
      {fertilizers.map((fertilizer) => (
        <option key={fertilizer._id} value={fertilizer.fertilizer_name}>
          {fertilizer.fertilizer_name}
        </option>
      ))}
    </select>
  )}

  <label style={{ display: "block", marginBottom: "10px" }}>Growth Stage:</label>
  {loadingGrowthStages ? (
    <p>Loading growth stages...</p>
  ) : (
    <select
      value={growthStage}
      onChange={(e) => setGrowthStage(e.target.value)}
      required
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "15px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <option value="">Select Growth Stage</option>
      {growthStages.map((stage) => (
        <option key={stage._id} value={stage.stage_name}>
          {stage.stage_name}
        </option>
      ))}
    </select>
  )}

  <label style={{ display: "block", marginBottom: "10px" }}>Amount per Plant:</label>
  <input
    type="number"
    value={amountPerPlant}
    onChange={(e) => setAmountPerPlant(e.target.value)}
    required
    style={{
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    }}
  />

  <button
    type="submit"
    style={{
      backgroundColor: "#4CAF50",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    }}
  >
    Add Rule
  </button>
</form>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Rule ID</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Crop ID</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Season ID</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Climate ID</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Soil Type ID</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Fertilizer Type</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Fertilizer Name</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Growth Stage</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Amount per Plant</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rules.map((rule) => (
            <tr key={rule.rule_id}>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{rule.rule_id}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{rule.crop_id}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{rule.season_id}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{rule.climate_id}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{rule.soil_type_id}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{rule.fertilizer_type}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{rule.fertilizer_name}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{rule.growth_stage}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{rule.amount_per_plant}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                <button
                  onClick={() => handleDeleteRule(rule.rule_id)}
                  style={{
                    backgroundColor: "#f44336",
                    color: "#fff",
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
    </div>
  );
};

export default RulesManagement;