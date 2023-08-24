import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const LeafletMap = () => {
    const position = [52.3676, 4.9041]; // Latitude and Longitude

    const mapStyle = {
        height: '600px',
        zIndex: 0, // Add the zIndex property here
    };

    return (
        <MapContainer center={position} zoom={13} style={mapStyle}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default LeafletMap;