// react leaflet > "https://react-leaflet.js.org/"
// React Leaflet Tutorial for Beginners (2025) > "https://www.youtube.com/watch?v=jD6813wGdBA&t=913s"

import axios from 'axios'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

const MapDisplay = () => {

    const [markers, setMarkers] = useState([])

    const getMarkers = async () =>{
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/markers/')
            console.log(response.data)
            setMarkers(response.data)
        } catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        getMarkers()
    }, [])

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