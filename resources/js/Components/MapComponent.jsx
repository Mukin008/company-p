import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const MapComponent = () => {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        axios
            .get('http://your-laravel-backend-api.com/api/locations')
            .then((response) => {
                setPositions(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <MapContainer
            center={[-7.3127192, 112.7408618]}
            zoom={13}
            style={
                {
                    height: '35vh', 
                    width: '100%',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                    overflow: 'hidden',
                    position: 'relative',
                    zIndex: '0'
                }
            }
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {positions.map((position, index) => (
                <Marker key={index} position={[-7.3127192, 112.7408618]}>
                    <Popup>{position.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapComponent;
