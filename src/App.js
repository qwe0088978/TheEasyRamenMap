import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import HeaderWithFilter from './components/HeaderWithFilter';
import MapContainer from './components/MapContainer';
import './App.css';

function App() {
  const [taste, setTaste] = useState('');
  const [region, setRegion] = useState('');
  const [mrtStation, setMrtStation] = useState('');

  return (
    <div>
      <HeaderWithFilter
        taste={taste}
        region={region}
        mrtStation={mrtStation}
        handleTasteChange={(e) => setTaste(e.target.value)}
        handleRegionChange={(e) => setRegion(e.target.value)}
        handleMrtStationChange={(e) => setMrtStation(e.target.value)}
      />
      <MapContainer
        taste={taste}
        region={region}
        mrtStation={mrtStation}
      />
    </div>
  );
}

export default App;
