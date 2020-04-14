import React, {useEffect, useRef} from 'react';
import './GoogleMaps.css';

// Variables
const GOOGLE_MAP_API_KEY = 'AIzaSyD03bh5PIS2v2_K0_qW7kc5HrIXIzHEwY4';
const myLocation = { // CN Tower Landmark
    lat: 43.642567,
    lng: -79.387054
};
// styles
const mapStyles = {
};

function GoogleMaps(props) {
    // refs
    const googleMapRef = React.createRef();
    const googleMap = useRef(null);
    const marker = useRef(null);

    // helper functions
    const createGoogleMap = () =>
        new window.google.maps.Map(googleMapRef.current, {
            zoom: 14,
            center: {
                lat: myLocation.lat,
                lng: myLocation.lng
            }
        });

    const createMarker = () =>
        new window.google.maps.Marker({
            position: {lat: myLocation.lat, lng: myLocation.lng},
            map: googleMap.current
        });

    // useEffect Hook
    useEffect(() => {
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
        window.document.body.appendChild(googleMapScript);

        googleMapScript.addEventListener('load', () => {
            googleMap.current = createGoogleMap();
            marker.current = createMarker()
        })
    });

    return (
        <div
            className="google-map"
            id="google-map"
            ref={googleMapRef}
            style={mapStyles}
        />
    )

}

export default GoogleMaps