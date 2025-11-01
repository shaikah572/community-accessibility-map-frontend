// react leaflet > "https://react-leaflet.js.org/"
// React Leaflet Tutorial for Beginners (2025) > "https://www.youtube.com/watch?v=jD6813wGdBA&t=913s"
// react-sliding-pane > "https://www.npmjs.com/package/react-sliding-pane?activeTab=readme"

import axios from 'axios'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import SlidingPane from "react-sliding-pane"
import "react-sliding-pane/dist/react-sliding-pane.css"
import CommentsDisplay from './CommentsDisplay/CommentsDisplay'
import CommentForm from './CommentForm/CommentForm'


const MapDisplay = ({ user }) => {

    const [isPaneOpen, setIsPaneOpen] = useState(false)
    const [markers, setMarkers] = useState([])
    const [currentMarker, setCurrentMarker] = useState(null)

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
        <>
            <MapContainer center={[21.506441, 39.196172]} zoom={13} className='map'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {
                    markers.map((marker) => {
                        const customIcon = new Icon({
                            iconUrl: `http://127.0.0.1:8000/${marker.category.icon}`,
                            iconSize: [30, 30]
                        })
                        return <div>
                            <Marker
                                position={[marker.lat, marker.lng]}
                                icon={customIcon}
                                // stackoverflow > "Arbitrary function on react-leaflet marker click"
                                eventHandlers={{
                                    click: () => { setCurrentMarker(marker); setIsPaneOpen(true); },
                                }} >
                            </Marker>
                        </div>
                    })
                }
            </MapContainer>
            <SlidingPane
                className='some-custom-class'
                overlayClassName='some-custom-overlay-class'
                isOpen={isPaneOpen}
                title={currentMarker ? currentMarker.name : ''}
                subtitle={currentMarker ? currentMarker.description : ''}
                from='left'
                width='40vw'
                onRequestClose={() => { setIsPaneOpen(false) }}>
                    {
                        user ? <CommentForm markerId={currentMarker ? currentMarker.id : ''} /> : ''
                    }
                <CommentsDisplay user={user ? user : ''} markerId={currentMarker ? currentMarker.id : ''} />
            </SlidingPane>
        </>
    )
}

export default MapDisplay