import React from 'react';
import './Filter.css';

const Filter = ({ taste, region, mrtStation, handleTasteChange, handleRegionChange, handleMrtStationChange }) => (
  <div className="filter-container">
    <div className="filter-item">
      <label htmlFor="taste">Taste:</label>
      <select id="taste" value={taste} onChange={handleTasteChange}>
        <option value="">Choose</option>
        <option value="濃湯">濃湯</option>
        <option value="清湯">清湯</option>
        <option value="沾麵">沾麵</option>
      </select>
    </div>
    <div className="filter-item">
      <label htmlFor="region">Region:</label>
      <select id="region" value={region} onChange={handleRegionChange}>
        <option value="">Choose</option>
        <option value="north">North</option>
        <option value="south">South</option>
        <option value="east">East</option>
        <option value="west">West</option>
      </select>
    </div>
    <div className="filter-item">
      <label htmlFor="mrt">MRT Station:</label>
      <select id="mrt" value={mrtStation} onChange={handleMrtStationChange}>
        <option value="">Choose</option>
        <option value="taipei101">Taipei 101</option>
        <option value="ximending">Ximending</option>
        <option value="shilin">Shilin</option>
      </select>
    </div>
  </div>
);

export default Filter;
