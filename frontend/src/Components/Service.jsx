import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Service = () => {
  const [crop, setCrop] = useState('');
  const [climate, setClimate] = useState('');
  const [season, setSeason] = useState('');
  const [soilType, setSoilType] = useState('');
  const [fertilizerType, setFertilizerType] = useState('');
  const [growthStage, setGrowthStage] = useState('');
  const [amountPerPlant, setAmountPerPlant] = useState('');
  const [recommendation, setRecommendation] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [crops, setCrops] = useState([]);
  const [climates, setClimates] = useState([]);
  const [soilTypes, setSoilTypes] = useState([]);
  const [fertilizers, setFertilizers] = useState([]);
  const [growthStages, setGrowthStages] = useState([]);
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const cropData = await axios.get('http://localhost:3001/crops');
        const climateData = await axios.get('http://localhost:3001/climate');
        const soilData = await axios.get('http://localhost:3001/soiltypes');
        const fertilizerData = await axios.get('http://localhost:3001/fertilizers');
        const growthStageData = await axios.get('http://localhost:3001/growthstages');
        const seasonData = await axios.get('http://localhost:3001/seasons'); // Fetch seasons

        console.log(cropData)
  
        setCrops(cropData.data);
        setClimates(climateData.data);
        setSoilTypes(soilData.data);
        setFertilizers(fertilizerData.data);
        setGrowthStages(growthStageData.data);
        setSeasons(seasonData.data); // Set season data
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data.');
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!crop || !climate || !season || !growthStage || !soilType || !amountPerPlant) {
      setError('All fields are required');
      return;
    }
  
    // Find corresponding IDs from the dropdown lists
    const selectedCrop = crops.find((c) => c.crop_name === crop);
    const selectedClimate = climates.find((c) => c.climate_name === climate);
    const selectedSeason = seasons.find((s) => s.season_name === season);
    const selectedSoilType = soilTypes.find((s) => s.soil_type_id === soilType);
    const selectedGrowthStage = growthStages.find((g) => g.stage_name === growthStage);
  
    // Debugging: Log the found values
    console.log("Selected Crop:", selectedCrop);
    console.log("Selected Climate:", selectedClimate);
    console.log("Selected Season:", selectedSeason);
    console.log("Selected Soil Type:", selectedSoilType);
    console.log("Selected Growth Stage:", selectedGrowthStage);
  
    if (!selectedCrop || !selectedClimate || !selectedSeason || !selectedSoilType || !selectedGrowthStage) {
      setError('Invalid selection. Please check your inputs.');
      return;
    }
  
    const data = {
      crop_id: selectedCrop.crop_id,
      climate_id: selectedClimate.climate_id,
      season_id: selectedSeason.season_id,
      soil_type_id: selectedSoilType.soil_type_id,
      fertilizer_type: fertilizerType,
      growth_stage: selectedGrowthStage.stage_name,
      amount_per_plant: Number(amountPerPlant),
    };
  
    // Debugging: Log data before sending request
    console.log("Submitting Data:", data);
    
    try {
      const response = await axios.post('http://localhost:3001/api/recommendation', data);
      
      console.log("API Response:", response.data); // Debugging response
  
      if (response.data && response.data.fertilizer_name) {
        setRecommendation(response.data);
        setError(''); // Reset any previous errors
      } else {
        setRecommendation(null);
        setError('No recommendation found.');
      }
    } catch (err) {
      console.log("Error fetching recommendation:", err);
      setRecommendation(null);
      setError('Error fetching recommendation. Please try again.');
    }
  };

  
  return (
    <div>
      
      <title>ferico</title>
      <link rel="icon" href="images/fevicon.png" type="image/gif" />

      {/* Loader */}
      {loading && (
        <div className="loader_bg">
          <div className="loader"><img src="images/loading.gif" alt="#" /></div>
        </div>
      )}

      <div className="full_bg">
        <header className="header-area">
          <div className="container-fluid">
            <div className="row d_flex">
              <div className="col-md-2 col-sm-3">
                <div className="logo">
                  <a href="index.html">FERI<span>CO</span></a>
                </div>
              </div>
              <div className="col-md-8 col-sm-9">
                <div className="navbar-area">
                  <nav className="site-navbar">
                    <ul>
                      <li><a href="/index">Home</a></li>
                      <li><a href="/about">About</a></li>
                      <li><a className="active" href="/service">Service</a></li>
                      <li><a href="/testimonail">Testimonail</a></li>
                      <li><a href="/blog">Blog</a></li>
                      <li><a href="/contact">Contact</a></li>
                    </ul>
                    <button className="nav-toggler">
                      <span />
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="services">
        <div className="container" style={{ textAlign: 'center', padding: '30px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{ color: '#4CAF50', fontSize: '2rem', marginBottom: '20px', textTransform: 'uppercase' }}>Fertilizer Recommendations</h1>
          <form onSubmit={handleSubmit} style={{ margin: '0 auto', padding: '20px', border: '2px solid #4CAF50', width: '80%', backgroundColor: 'white', borderRadius: '10px', boxSizing: 'border-box' }}>
            {/* Crop Selection */}
            <label htmlFor="crop" style={{ display: 'block', fontWeight: 'bold', margin: '10px 0 5px', color: '#388e3c', fontSize: '1rem' }}>Select a Crop:</label>
            <select
              name="crop"
              id="crop"
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ddd' }}
            >
              <option value="">--Select Crop--</option>
              {crops.map((cropItem) => (
                <option key={cropItem.crop_id} value={cropItem.crop_name}>{cropItem.crop_name}</option>
              ))}
            </select>

            {/* Climate Selection */}
            <label htmlFor="climate" style={{ display: 'block', fontWeight: 'bold', margin: '10px 0 5px', color: '#388e3c', fontSize: '1rem' }}>Select Climate:</label>
            <select
              name="climate"
              id="climate"
              value={climate}
              onChange={(e) => setClimate(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ddd' }}
            >
              <option value="">Select Climate</option>
              {climates.map((climateItem) => (
                <option key={climateItem._id} value={climateItem.climate_name}>{climateItem.climate_name}</option>
              ))}
            </select>

            {/* Season Selection */}
            <label htmlFor="season" style={{ display: 'block', fontWeight: 'bold', margin: '10px 0 5px', color: '#388e3c', fontSize: '1rem' }}>Select Season:</label>
            <select
              name="season"
              id="season"
              value={season}
              onChange={(e) => setSeason(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ddd' }}
            >
              <option value="">Select Season</option>
              {seasons.map((seasonItem) => (
                <option key={seasonItem._id} value={seasonItem.season_name}>{seasonItem.season_name}</option>
              ))}
            </select>

            {/* Soil Type Selection */}
            <label htmlFor="soil_type" style={{ display: 'block', fontWeight: 'bold', margin: '10px 0 5px', color: '#388e3c', fontSize: '1rem' }}>Select Soil Type:</label>
        
            <select
  name="soil_type"
  id="soil_type"
  value={soilType}
  onChange={(e) => setSoilType(Number(e.target.value))}
  style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ddd' }}
>
  <option value="">Select Soil Type</option>
  {soilTypes.map((soilItem) => (
    <option key={soilItem.soil_type_id} value={soilItem.soil_type_id}>
      {soilItem.soil_type_name}
    </option>
  ))}
</select>
            
            <label style={{ display: 'block', fontWeight: 'bold', margin: '10px 0 5px', color: '#388e3c', fontSize: '1rem' }}>Fertilizer Type:</label>
<select
  value={fertilizerType}
  onChange={(e) => setFertilizerType(e.target.value)}
  style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px' }}
>
  <option value="">--Select Fertilizer Type--</option>
  <option value="organic">Organic</option>
  <option value="inorganic">Inorganic</option>
</select>
            {/* Growth Stage Selection */}
            <label htmlFor="growth_stage" style={{ display: 'block', fontWeight: 'bold', margin: '10px 0 5px', color: '#388e3c', fontSize: '1rem' }}>Select Growth Stage:</label>
            <select
              name="growth_stage"
              id="growth_stage"
              value={growthStage}
              onChange={(e) => setGrowthStage(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ddd' }}
            >
              <option value="">Select Growth Stage</option>
              {growthStages.map((growthItem) => (
                <option key={growthItem._id} value={growthItem.stage_name}>{growthItem.stage_name}</option>
              ))}
            </select>

            {/* Amount per plant */}
            <label htmlFor="amount_per_plant" style={{ display: 'block', fontWeight: 'bold', margin: '10px 0 5px', color: '#388e3c', fontSize: '1rem' }}>Amount per Plant:</label>
            <input
              type="number"
              id="amount_per_plant"
              value={amountPerPlant}
              onChange={(e) => setAmountPerPlant(e.target.value)}

              style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ddd' }}
            />

            <button type="submit" style={{ width: '100%', padding: '10px 0', borderRadius: '5px', backgroundColor: '#4CAF50', color: 'white', fontSize: '1.1rem', border: 'none', cursor: 'pointer' }}>Get Recommendation</button>
          </form>
          
          {/* Error Message */}
          {error && (
            <div style={{ color: 'red', marginTop: '20px', fontWeight: 'bold' }}>
              {error}
            </div>
          )}

{recommendation && (
  <div style={{ marginTop: '20px', padding: '15px', borderRadius: '10px', border: '1px solid #388e3c', backgroundColor: '#e8f5e9' }}>
    <h3 style={{ color: '#388e3c' }}>Recommended Fertilizer:</h3>
    <p><strong>Name:</strong> {recommendation.fertilizer_name}</p>
    <p><strong>Description:</strong> {recommendation.description}</p>
    <p><strong>Application method:</strong> {recommendation.application_method}</p>
    <p><strong>Amount per Plant:</strong> {recommendation.amount_per_plant}g</p>
  </div>
)}

        </div>
      </div>
    </div>
  );
};

export default Service;