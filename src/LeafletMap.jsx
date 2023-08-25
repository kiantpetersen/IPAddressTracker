import React from 'react';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent } from 'react-leaflet';

const LeafletMap = ({ coords }) => {
    const position = coords; // Latitude and Longitude

    const mapStyle = {
        height: '600px',
        zIndex: 0, // Add the zIndex property here
    };
    function MyComponent() {
        const map = useMapEvent('mouseover', () => {
            map.setView(coords, map.getZoom())
        })
        return null;
    }


    return (
        <MapContainer className='map-container' scrollWheelZoom={false} center={position} zoom={11} style={mapStyle}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <MyComponent />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>

        </MapContainer>
    );
    // const [map, setMap] = useState(null);



};

export default LeafletMap;