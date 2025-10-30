// react leaflet > "https://react-leaflet.js.org/"
// React Leaflet Tutorial for Beginners (2025) > "https://www.youtube.com/watch?v=jD6813wGdBA&t=913s"

import axios from 'axios'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

const MapDisplay = () => {

    const [markers, setMarkers] = useState([])

    const icontest = new Icon({
        iconUrl: "https://thumbs.dreamstime.com/b/pin-point-location-icon-isolated-white-background-location-icon-141743215.jpg",
        iconSize: [30, 30]
    })

    const getMarkers = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/markers/')
            console.log(response.data)
            setMarkers(response.data)
        } catch (error) {
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
            {
                markers.map((marker) => {
                    const customIcon = new Icon({
                            iconUrl: `http://127.0.0.1:8000/${marker.category.icon}`,
                            iconSize: [30, 30]
                        })
                    return <Marker
                        position={[marker.lat, marker.lng]} icon={customIcon}
                    >{marker.name}</Marker>
                })
            }
        </MapContainer>
    )
}

export default MapDisplay