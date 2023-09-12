import React, { useEffect } from 'react';

const Map = ({ address }) => {
    

    useEffect(() => {

        const geocoder = new window.google.maps.Geocoder();
        const mapElement = document.getElementById('map');

        geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results.length > 0) {
            const lat = results[0].geometry.location.lat();
            const lng = results[0].geometry.location.lng();

            // Create a map centered at the geocoded coordinates
            const map = new window.google.maps.Map(mapElement, {
            center: { lat, lng },
            zoom: 15,
            });

            // Add a marker at the geocoded location
            const marker = new window.google.maps.Marker({
            position: { lat, lng },
            map,
            title: 'Apartment Location',
            });
        } else {
            console.error('Geocoding failed:', status);
        }
        });
    }, [address]);

  return (
    <div id="map" style={{ height: '400px', width: '100%' }}>
      {/* The map will be rendered inside this div */}
    </div>
  );
};

export default Map;
