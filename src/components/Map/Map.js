import React, { useEffect } from 'react';

const Map = ({ address }) => {
    // const geocodeAddress = async (address) => {
    //     const apiKey = 'AIzaSyBut0RtI15tFwNVUiy7cJmY_dIa58ZbqLQ';
    //     const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    //     try {
    //         const response = await fetch(apiUrl);
    //         if (!response.ok) {
    //         throw new Error('Geocoding failed');
    //         }

    //         const data = await response.json();
    //         if (data.results.length === 0) {
    //         throw new Error('No results found for the address');
    //         }

    //         // Extract the latitude and longitude from the geocoding response
    //         const { lat, lng } = data.results[0].geometry.location;
    //         return { lat, lng };
    //     } catch (error) {
    //         console.error('Geocoding error:', error);
    //         return null;
    //     }
    //   };


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
