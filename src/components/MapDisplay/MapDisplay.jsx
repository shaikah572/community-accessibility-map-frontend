// react leaflet > "https://react-leaflet.js.org/"
// React Leaflet Tutorial for Beginners (2025) > "https://www.youtube.com/watch?v=jD6813wGdBA&t=913s"

import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

const MapDisplay = () => {


    return (
        <MapContainer center={[21.506441, 39.196172]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        test
                    </Popup>
                </Marker>
        </MapContainer>
    )
}

export default MapDisplay