import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const MapDisplay = () => {
    return (
        <MapContainer center={[21.506441, 39.196172]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
    )
}

export default MapDisplay