import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';
import './MapContainer.css';

const center = {
  lat: 25.0330,
  lng: 121.5654
};

function MapContainer({ taste, region, mrtStation }) {
  const [ramenShops, setRamenShops] = useState([]);
  const [mapSize, setMapSize] = useState({
    width: '100%',
    height: '100px'
  });

  useEffect(() => {
    function handleResize() {
      setMapSize({
        width: '100%',
        height: `${window.innerHeight - document.querySelector('header').offsetHeight}px`
      });
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/api/ramen', { params: { taste, region, mrtStation } })
      .then(response => setRamenShops(response.data))
      .catch(error => console.error('Error fetching ramen shops:', error));
  }, [taste, region, mrtStation]);

  return (
    <div className="map-container">
      <div className="google-map">
        <LoadScript googleMapsApiKey="AIzaSyC238pwHPaNMY3VXOOfuZFkuSVKRnaZqOM">
          <GoogleMap
            mapContainerStyle={mapSize}
            center={center}
            zoom={12}
          >
            {ramenShops.map(shop => (
              <Marker key={shop.id} position={{ lat: shop.lat, lng: shop.lng }} />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default MapContainer;
